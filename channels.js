/*
  channels.js
  ────────────
  Contains all IPTV channels used by index.html.
  Supports: HLS (.m3u8), DASH (.mpd with ClearKey DRM), and YouTube embeds.
*/

const combinedChannels = [
  /* ---------- HLS STREAMS ---------- */
  { name: "4K Travel TV", type: "hls",
    url: "https://streams2.sofast.tv/sofastplayout/33c31ac4-51fa-46ae-afd0-0d1fe5e60a80_0_HLS/master.m3u8" },
  
  { name: "Cinemo", type: "hls",
    url: "https://live-faws.akamaized.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd" },

  { name: "ABS-CBN Live (YouTube)", type: "youtube",
    url: "https://www.youtube.com/embed/x_qgWdUGb0s" },

  /* ---------- DASH STREAMS (ClearKey) ---------- */
  {
    name: "A2Z",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "f703e4c8ec9041eeb5028ab4248fa094": "c22f2162e176eee6273a5d0b68d19530"
    }
  },

  {
    name: "ANC",
    type: "dash",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd",
    category: "Local Channels",
    clearKey: {
      "4bbdc78024a54662854b412d01fafa16": "6039ec9b213aca913821677a28bd78ae"
    }
  },

  {
    name: "BILYONARYO CHANNEL",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bilyonaryoch/default1/index.mpd",
    clearKey: {
      "227ffaf09bec4a889e0e0988704d52a2": "b2d0dce5c486891997c1c92ddaca2cd2"
    }
  },

  {
    name: "BUKO",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_buko_sd/default/index.mpd",
    clearKey: {
      "d273c085f2ab4a248e7bfc375229007d": "7932354c3a84f7fc1b80efa6bcea0615"
    }
  },

  {
    name: "CELESTIAL MOVIES PINOY",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/celmovie_pinoy_sd/default/index.mpd",
    clearKey: {
      "0f8537d8412b11edb8780242ac120002": "2ffd7230416150fd5196fd7ea71c36f3"
    }
  },

  {
    name: "A2Z",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "f703e4c8ec9041eeb5028ab4248fa094": "c22f2162e176eee6273a5d0b68d19530"
    }
  },

  {
    name: "ANC",
    type: "dash",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd",
    category: "Local Channels",
    clearKey: {
      "4bbdc78024a54662854b412d01fafa16": "6039ec9b213aca913821677a28bd78ae"
    }
  },

  {
    name: "BILYONARYO CHANNEL",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bilyonaryoch/default1/index.mpd",
    clearKey: {
      "227ffaf09bec4a889e0e0988704d52a2": "b2d0dce5c486891997c1c92ddaca2cd2"
    }
  },

  {
    name: "BUKO",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_buko_sd/default/index.mpd",
    clearKey: {
      "d273c085f2ab4a248e7bfc375229007d": "7932354c3a84f7fc1b80efa6bcea0615"
    }
  },

  {
    name: "BUKO",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_buko_sd/default/index.mpd",
    clearKey: {
      "d273c085f2ab4a248e7bfc375229007d": "7932354c3a84f7fc1b80efa6bcea0615"
    }
  },

  {
  name: "ALIW CHANNEL",
  url: "http://161.49.17.2:6610/001/2/ch00000090990000001109/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com",
  logo: "https://i.imgur.com/lrd5Z0V.jpeg",
  category: "Local Channels 🇵🇭",
  type: "dash",
  drm: {
    widevine: "http://143.44.136.74:9443/widevine/?deviceId=02:00:00:00:00:00"
  }
];
