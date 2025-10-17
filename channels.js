/*
  channels.js
  ────────────
  Contains all IPTV channels used by index.html.
  Supports: HLS (.m3u8), DASH (.mpd with ClearKey DRM), and YouTube embeds.
*/

const combinedChannels = [
  /* ---------- HLS STREAMS ---------- */
  { name: "48 Hours", type: "hls",
    url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6176f39e709f160007ec61c3/master.m3u8" },

  { name: "4K Travel TV", type: "hls",
    url: "https://streams2.sofast.tv/sofastplayout/33c31ac4-51fa-46ae-afd0-0d1fe5e60a80_0_HLS/master.m3u8" },

  { name: "CBS Sports HQ", type: "hls",
    url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5e9f2c05172a0f0007db4786/master.m3u8" },

  { name: "Anime All Day", type: "hls",
    url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8" },

  { name: "KBS World (HLS)", type: "hls",
    url: "https://kbsworld-ott.akamaized.net/hls/live/2002341/kbsworld/master.m3u8" },

  { name: "ABS-CBN Live (YouTube)", type: "youtube",
    url: "https://www.youtube.com/embed/x_qgWdUGb0s" },

  /* ---------- DASH STREAMS (ClearKey) ---------- */
  {
    name: "Jeepney TV (DASH)",
    type: "dash",
    url: "https://abslive.akamaized.net/dash/live/2028025/jeepneytv/manifest.mpd",
    clearKey: {
      "90ea4079e02f418db7b170e8763e65f0": "1bfe2d166e31d03eee86ee568bd6c272"
    }
  },

  {
    name: "A2Z (DASH)",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
    clearKey: {
      "f703e4c8ec9041eeb5028ab4248fa094": "c22f2162e176eee6273a5d0b68d19530"
    }
  },

  {
    name: "GMA Pinoy TV (DASH)",
    type: "dash",
    url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd",
    clearKey: {
      "c95ed4c44b0b4f7fa1c6ebbbbaab21a1": "47635b8e885e19f2ccbdff078c207058"
    }
  },

  {
    name: "TFC (DASH)",
    type: "dash",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/7045bc3c-9492-42d4-974e-a3b217776e57/index.mpd",
    clearKey: {
      "9568cc84e1d944f38eac304517eab6fd": "f12142af8f39b3bab79d3679d3665ebe"
    }
  },

  {
    name: "HBO (DASH)",
    type: "dash",
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
    clearKey: {
      "d47ebabf7a21430b83a8c4b82d9ef6b1": "54c213b2b5f885f1e0290ee4131d425b"
    }
  },

  {
    name: "Nickelodeon (DASH)",
    type: "dash",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2511/default_primary.mpd",
    clearKey: {
      "d8520e96a1283ab6e5be538474bfa810": "bda5f7bbc1e44096f779a0619fe9881f"
    }
  },

  {
    name: "BBC World News (DASH)",
    type: "dash",
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd",
    clearKey: {
      "f59650be475e4c34a844d4e2062f71f3": "119639e849ddee96c4cec2f2b6b09b40"
    }
  },

  {
    name: "SPOTV (DASH)",
    type: "dash",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",
    clearKey: {
      "ec7ee27d83764e4b845c48cca31c8eef": "9c0e4191203fccb0fde34ee29999129e"
    }
  },
  
];
