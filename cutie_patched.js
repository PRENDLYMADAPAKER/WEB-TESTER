/* cutie-patched.js — final version with CORS proxy fallback */

(() => {
  // Use direct raw URL plus fallback via CORS proxy if direct fails
  const RAW_URL = "https://raw.githubusercontent.com/PRENDLYMADAPAKER/ANG-KALAT-MO/refs/heads/main/IPTVPREMIUM.m3u";
  const CORS_PROXY = "https://api.allorigins.win/raw?url=" + encodeURIComponent(RAW_URL);
  // We'll try raw first, then fallback
  let playlistUrl = RAW_URL;

  const $ = id => document.getElementById(id);
  const log = (...args) => {
    console.log("[IPTV]", ...args);
    const el = $("log");
    if (el) el.textContent = new Date().toLocaleTimeString() + " — " + args.join(" ") + "\n" + el.textContent;
  };

  function parseM3U(text) {
    const lines = text.split(/\r?\n/).map(l => l.trim());
    const parsed = [];
    let meta = null;

    function parseKodiprop(s) {
      const out = {};
      const cleaned = s.replace(/^#KODIPROP:\s*/i, '');
      const parts = cleaned.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
      for (let p of parts) {
        const idx = p.indexOf('=');
        if (idx === -1) continue;
        const key = p.substring(0, idx).trim();
        let val = p.substring(idx+1).trim();
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        out[key] = val;
      }
      return out;
    }

    for (let l of lines) {
      if (!l) continue;
      if (l.startsWith("#EXTINF")) {
        meta = { raw: l, name: (() => {
          const i = l.indexOf(",");
          return i >= 0 ? l.slice(i+1).trim() : l;
        })(), kodiprops: {} };
      } else if (l.startsWith("#KODIPROP")) {
        if (!meta) meta = { raw: "", kodiprops: {} };
        const obj = parseKodiprop(l);
        meta.kodiprops = Object.assign(meta.kodiprops || {}, obj);
      } else if (l.startsWith("#")) {
        // ignore other tags
      } else if (/^https?:\/\//i.test(l)) {
        parsed.push({
          name: (meta && meta.name) || l,
          url: l,
          rawMeta: meta ? meta.raw : "",
          kodiprops: meta ? (meta.kodiprops || {}) : {}
        });
        meta = null;
      } else {
        // ignore
      }
    }
    return parsed;
  }

  function detectType(url, kodiprops = {}) {
    const u = url.split("?")[0].toLowerCase();
    if (u.endsWith(".m3u8") || (kodiprops && (kodiprops.type === "hls" || /hls/i.test(kodiprops["inputstream.adaptive"] || "")))) {
      return "hls";
    }
    if (u.endsWith(".mpd") || (kodiprops && (kodiprops.type === "dash" || /dash|mpd/i.test(kodiprops["inputstream.adaptive"] || "")))) {
      return "dash";
    }
    return "mp4";
  }

  function buildDrmConfig(kodiprops) {
    const license = kodiprops["inputstream.adaptive.license_key"] || kodiprops["license_key"] || kodiprops["license_url"];
    const licType = (kodiprops["inputstream.adaptive.license_type"] || kodiprops["license_type"] || "").toLowerCase();
    if (!license) return null;
    const drm = {};
    if (licType.includes("widevine") || licType.includes("com.widevine.alpha")) {
      drm.widevine = { url: license };
    } else if (licType.includes("clearkey")) {
      drm.clearkey = { url: license };
    } else {
      drm.widevine = { url: license };
    }
    return drm;
  }

  // JW Player container id
  const PLAYER_ID = "video";
  let currentChannel = null;
  let freezeInterval = null;

  if (!window.jwplayer) {
    log("jwplayer not found — make sure jwplayer.js is loaded before this script");
    return;
  }

  let player = null;
  try {
    player = jwplayer(PLAYER_ID).setup({ width: "100%", aspectratio: "16:9", autostart: false });
  } catch (e) {
    log("JW Player setup error:", e);
  }

  function playChannel(ch) {
    currentChannel = ch;
    log("Playing channel:", ch.name, ch.url);

    const typ = detectType(ch.url, ch.kodiprops);
    const source = { file: ch.url };
    if (typ === "hls") source.type = "hls";
    else if (typ === "dash") source.type = "dash";
    else source.type = "mp4";

    const playlist = [{ title: ch.name, sources: [source] }];
    const config = {
      playlist: playlist,
      autostart: true,
      controls: true,
      width: "100%",
      aspectratio: "16:9"
    };

    const drmCfg = buildDrmConfig(ch.kodiprops || {});
    if (drmCfg) {
      config.drm = drmCfg;
      log("Using DRM config:", drmCfg);
    }

    try {
      if (player && typeof player.load === "function") {
        player.load(playlist);
        player.on("playlistItem", () => {
          try { player.play(); } catch(e) {}
        });
        // Attempt to play after slight delay
        setTimeout(() => { try { player.play(); } catch(e) {} }, 300);
      } else {
        player = jwplayer(PLAYER_ID).setup(config);
      }
    } catch (err) {
      log("Error in jwplayer playChannel:", err);
      alert("Playback error: " + (err.message || err));
    }

    setupFreezeDetection();
  }

  function setupFreezeDetection() {
    if (freezeInterval) clearInterval(freezeInterval);
    let lastPos = null;
    let stuck = 0;
    freezeInterval = setInterval(() => {
      if (!player || !player.getPosition) return;
      const pos = player.getPosition();
      const state = player.getState ? player.getState() : null;
      if (pos == null) { lastPos = pos; return; }
      if (state === "paused" || state === "idle") {
        lastPos = pos;
        stuck = 0;
        return;
      }
      if (lastPos != null && Math.abs(pos - lastPos) < 0.01) {
        stuck++;
      } else {
        stuck = 0;
      }
      lastPos = pos;
      if (stuck >= 8) {
        log("Playback stuck — reloading channel:", currentChannel ? currentChannel.name : "");
        if (currentChannel) {
          try { player.stop && player.stop(); } catch(e){}
          setTimeout(() => { playChannel(currentChannel); }, 900);
        }
        stuck = 0;
      }
    }, 1000);
  }

  // UI: render channel list
  let channels = [];
  function renderChannels(list) {
    const cont = $("channelList");
    if (!cont) return;
    cont.innerHTML = "";
    list.forEach((ch, idx) => {
      const d = document.createElement("div");
      d.className = "channel";
      d.style.padding = "8px";
      d.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
      d.style.cursor = "pointer";
      d.innerHTML = `<div>${escapeHtml(ch.name)}</div><div style="font-size:12px;color:#888;">${escapeHtml(ch.url)}</div>`;
      d.onclick = () => playChannel(ch);
      cont.appendChild(d);
    });
    const cc = $("channelCountText");
    if (cc) cc.textContent = `${list.length} channels found`;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));
  }

  // Fetch playlist (first try RAW, then fallback to proxy)
  async function fetchPlaylist(url) {
    log("Fetching playlist:", url);
    try {
      const resp = await fetch(url, { cache: "no-store" });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      const txt = await resp.text();
      return txt;
    } catch (e) {
      log("Fetch failed:", e);
      throw e;
    }
  }

  async function loadAndRender() {
    try {
      let txt = await fetchPlaylist(playlistUrl);
      // If raw failed (empty or some HTML), try fallback proxy
      if (!txt || !txt.includes("#EXTINF")) {
        log("Raw fetch seems invalid. Trying proxy fallback.");
        playlistUrl = CORS_PROXY;
        txt = await fetchPlaylist(playlistUrl);
      }
      const parsed = parseM3U(txt);
      channels = parsed;
      renderChannels(channels);
      log("Parsed channels count:", parsed.length);
    } catch (err) {
      log("Error loading playlist:", err);
      channels = [];
      renderChannels(channels);
    }
  }

  // Search control
  $("search") && $("search").addEventListener("input", (ev) => {
    const q = (ev.target.value || "").trim().toLowerCase();
    if (!q) {
      renderChannels(channels);
    } else {
      const fil = channels.filter(c => 
        (c.name || "").toLowerCase().includes(q) ||
        (c.url || "").toLowerCase().includes(q)
      );
      renderChannels(fil);
    }
  });

  // Refresh & auto-refresh
  let autoRefresh = false, autoRefInt = null;
  $("refreshBtn") && $("refreshBtn").addEventListener("click", loadAndRender);
  $("autoRefreshToggle") && $("autoRefreshToggle").addEventListener("click", () => {
    autoRefresh = !autoRefresh;
    $("autoRefreshToggle").textContent = `Auto Refresh: ${autoRefresh ? "ON" : "OFF"}`;
    if (autoRefresh) {
      autoRefInt = setInterval(loadAndRender, 3 * 60 * 1000);
    } else {
      clearInterval(autoRefInt);
      autoRefInt = null;
    }
  });

  // Initial load
  loadAndRender().then(() => {
    if (channels.length > 0 && !/Mobi|Android/i.test(navigator.userAgent)) {
      setTimeout(() => playChannel(channels[0]), 500);
    }
  });

  window.addEventListener("beforeunload", () => {
    if (freezeInterval) clearInterval(freezeInterval);
  });
})();
