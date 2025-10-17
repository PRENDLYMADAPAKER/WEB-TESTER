/* cutie-patched.js
   Load this AFTER jwplayer.js and provider.shaka.js in index.html
   - Uses existing <div id="video"></div> as jwplayer container
   - Expects there to be an element with id="channelList" for side list
   - Looks for input#search and button#refreshBtn and #autoRefreshToggle if present;
     if not present it still works and will create a minimal list.
*/

(() => {
  const PLAYLIST_URL = "https://raw.githubusercontent.com/PRENDLYMADAPAKER/ANG-KALAT-MO/refs/heads/main/IPTV%20PREMIUM";

  // Helpers
  const $ = id => document.getElementById(id);
  const log = (...args) => {
    console.log("[IPTV]", ...args);
    const p = $("log");
    if (p) p.textContent = new Date().toLocaleTimeString() + " — " + args.join(" ") + "\n" + p.textContent;
  };

  // Ensure container elements exist or create minimal ones
  if (!$("channelList")) {
    const sidebar = document.querySelector(".sidebar") || document.body;
    const listWrap = document.createElement("div");
    listWrap.id = "channelList";
    listWrap.style.maxHeight = "60vh";
    listWrap.style.overflow = "auto";
    sidebar.appendChild(listWrap);
  }
  if (!$("search")) {
    const s = document.createElement("input");
    s.id = "search";
    s.placeholder = "Search channels...";
    s.style.width = "100%";
    s.style.margin = "8px 0";
    const sidebar = document.querySelector(".sidebar") || document.body;
    sidebar.insertBefore(s, sidebar.firstChild);
  }
  // optional buttons
  if (!$("refreshBtn")) {
    const b = document.createElement("button");
    b.id = "refreshBtn";
    b.textContent = "Refresh Playlist";
    b.style.margin = "8px 4px";
    const sidebar = document.querySelector(".sidebar") || document.body;
    sidebar.insertBefore(b, sidebar.firstChild.nextSibling);
  }
  if (!$("autoRefreshToggle")) {
    const at = document.createElement("button");
    at.id = "autoRefreshToggle";
    at.textContent = "Auto Refresh: OFF";
    at.style.margin = "8px 4px";
    const sidebar = document.querySelector(".sidebar") || document.body;
    sidebar.insertBefore(at, sidebar.firstChild.nextSibling);
  }

  // M3U parser (EXTINF + KODIPROP)
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
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1,-1);
        out[key] = val;
      }
      return out;
    }

    for (let l of lines) {
      if (!l) continue;
      if (l.startsWith('#EXTINF')) {
        meta = { raw: l, name: (() => {
          const i = l.indexOf(',');
          return i >= 0 ? l.slice(i+1).trim() : l;
        })(), kodiprops: {} };
      } else if (l.startsWith('#KODIPROP')) {
        if (!meta) meta = { raw:'', kodiprops:{} };
        const obj = parseKodiprop(l);
        meta.kodiprops = Object.assign(meta.kodiprops||{}, obj);
      } else if (l.startsWith('#')) {
        // ignore others
      } else if (/^https?:\/\//i.test(l)) {
        parsed.push({
          name: (meta && meta.name) || l,
          url: l,
          rawMeta: meta ? meta.raw : '',
          kodiprops: meta ? (meta.kodiprops || {}) : {}
        });
        meta = null;
      } else {
        // ignore
      }
    }
    return parsed;
  }

  // Detect type for JW Player
  function detectType(url, kodiprops = {}) {
    const u = url.split('?')[0].toLowerCase();
    if (u.endsWith('.m3u8') || (kodiprops && (kodiprops.type === 'hls' || /hls/i.test(kodiprops['inputstream.adaptive'] || '')))) return 'hls';
    if (u.endsWith('.mpd') || (kodiprops && (kodiprops.type === 'dash' || /dash|mpd/i.test(kodiprops['inputstream.adaptive'] || '')))) return 'dash';
    return 'mp4';
  }

  // Map kodiprops to JW Player DRM config (basic)
  function buildDrmConfig(kodiprops) {
    // common keys: inputstream.adaptive.license_key, inputstream.adaptive.license_type
    const license = kodiprops['inputstream.adaptive.license_key'] || kodiprops['license_key'] || kodiprops['license_url'];
    const licType = (kodiprops['inputstream.adaptive.license_type'] || kodiprops['license_type'] || '').toLowerCase();
    if (!license) return null;

    const drm = {};
    if (licType.includes('widevine') || licType.includes('com.widevine.alpha')) {
      drm.widevine = { url: license };
    } else if (licType.includes('clearkey')) {
      drm.clearkey = { url: license };
    } else {
      // best-effort: set as widevine
      drm.widevine = { url: license };
    }
    // If kodiprops contains headers or tokens, you may add them here; JW Player supports headers per provider.
    return drm;
  }

  // JW Player management
  const PLAYER_ID = "video"; // your div id
  let currentChannel = null;
  let freezeInterval = null;

  // Ensure jwplayer is available
  if (!window.jwplayer) {
    log("Error: jwplayer not found. Make sure jwplayer.js and provider.shaka.js are loaded before this script.");
    return;
  }

  // Initial setup: create a placeholder player instance so we can call load later
  let player = null;
  try {
    player = jwplayer(PLAYER_ID);
    // If empty, setup a minimal player to satisfy API
    player.setup({ width: "100%", aspectratio: "16:9", autostart: false });
  } catch (e) {
    log("jwplayer setup error", e);
  }

  // Play channel (uses jwplayer().load() for dynamic switching)
  function playChannel(ch) {
    currentChannel = ch;
    log("playChannel", ch.name, ch.url);

    const typ = detectType(ch.url, ch.kodiprops);
    const source = { file: ch.url };
    if (typ === 'hls') source.type = "hls";
    else if (typ === 'dash') source.type = "dash";
    else source.type = "mp4";

    const sources = [ source ];

    // Build JW config
    const setupObj = {
      playlist: [{ title: ch.name, sources }],
      width: "100%",
      aspectratio: "16:9",
      autostart: true,
      controls: true
    };

    // DRM (attempt)
    const drmConfig = buildDrmConfig(ch.kodiprops || {});
    if (drmConfig) {
      setupObj.drm = drmConfig;
      log("Applying DRM config", drmConfig);
    }

    try {
      // Use load if player exists, otherwise setup
      if (player && typeof player.load === 'function') {
        // jwplayer.load expects an array of playlist items
        player.load(setupObj.playlist);
        // Some browsers require calling play() after load
        player.on('playlistItem', () => {
          // ensure play attempt
          try { player.play(); } catch(e){}
        });
        // call play (some JW versions return promise)
        setTimeout(()=>{ try { player.play(); } catch(e){} }, 300);
      } else {
        player = jwplayer(PLAYER_ID).setup(setupObj);
      }
      // Update UI
      const nowEl = document.getElementById("nowPlayingChannel");
      if (nowEl) nowEl.textContent = ch.name;
    } catch (err) {
      log("jwplayer play error", err);
      alert("Playback error: " + (err.message || err));
    }

    installFreezeDetection();
  }

  // Freeze detection: if currentTime doesn't increase (and not paused) attempt reload
  function installFreezeDetection() {
    try { if (freezeInterval) clearInterval(freezeInterval); } catch(e){}
    let lastPos = null;
    let stuck = 0;
    freezeInterval = setInterval(() => {
      if (!player || !player.getPosition) return;
      const pos = player.getPosition ? player.getPosition() : null;
      const state = player.getState ? player.getState() : null; // buffer / playing / idle
      if (pos === null || typeof pos === 'undefined') { lastPos = pos; return; }
      // ignore if paused or idle
      if (state === 'paused' || state === 'idle') { lastPos = pos; stuck = 0; return; }
      if (lastPos === null) { lastPos = pos; return; }
      if (Math.abs(pos - lastPos) < 0.01) {
        stuck++;
      } else {
        stuck = 0;
      }
      lastPos = pos;
      if (stuck >= 8) { // ~8 seconds stuck
        log("Detected stuck playback — attempting reload of current channel");
        if (currentChannel) {
          try {
            player.stop && player.stop();
          } catch(e){}
          // small delay then reload
          setTimeout(()=> { playChannel(currentChannel); }, 900);
        }
        stuck = 0;
      }
    }, 1000);
  }

  // UI render
  let channels = [];
  function renderChannels(list) {
    const container = $("channelList");
    container.innerHTML = "";
    list.forEach((ch, idx) => {
      const div = document.createElement("div");
      div.className = "channel";
      div.style.padding = "8px";
      div.style.borderBottom = "1px solid rgba(255,255,255,0.04)";
      div.style.cursor = "pointer";
      div.innerHTML = `<div style="font-weight:600">${escapeHtml(ch.name)}</div><div style="font-size:12px;color:#9fb3bf">${escapeHtml(ch.url)}</div>`;
      div.onclick = () => playChannel(ch);
      container.appendChild(div);
    });
    const cc = document.getElementById("channelCountText");
    if (cc) cc.textContent = `${list.length} channels found`;
  }

  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  // Fetch playlist and wire UI
  async function loadPlaylist() {
    log("Fetching playlist", PLAYLIST_URL);
    try {
      const r = await fetch(PLAYLIST_URL, { cache: 'no-store' });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const txt = await r.text();
      channels = parseM3U(txt);
      renderChannels(channels);
      log("Loaded channels:", channels.length);
    } catch (err) {
      log("Playlist load error", err.message || err);
      alert("Failed to load playlist: " + (err.message || err));
      channels = [];
      renderChannels([]);
    }
  }

  // Search filter
  $("search").addEventListener('input', (e) => {
    const q = (e.target.value || "").trim().toLowerCase();
    if (!q) return renderChannels(channels);
    const filtered = channels.filter(c => (c.name || '').toLowerCase().includes(q) || (c.url || '').toLowerCase().includes(q));
    renderChannels(filtered);
  });

  // Refresh / Auto-refresh controls
  let autoRefresh = false, autoInterval = null;
  $("refreshBtn").addEventListener('click', loadPlaylist);
  $("autoRefreshToggle").addEventListener('click', () => {
    autoRefresh = !autoRefresh;
    $("autoRefreshToggle").textContent = `Auto Refresh: ${autoRefresh ? 'ON' : 'OFF'}`;
    if (autoRefresh) {
      autoInterval = setInterval(loadPlaylist, 3 * 60 * 1000);
    } else {
      clearInterval(autoInterval);
      autoInterval = null;
    }
  });

  // Initial load
  loadPlaylist().then(() => {
    // Optionally autoplay first channel on desktop only
    if (channels.length > 0 && !/Mobi|Android/i.test(navigator.userAgent)) {
      setTimeout(()=> { playChannel(channels[0]); }, 500);
    }
  });

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    try { if (freezeInterval) clearInterval(freezeInterval); } catch(e){}
  });
})();
