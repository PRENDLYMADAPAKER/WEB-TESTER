/*
  channels.js
  ────────────
  Contains all IPTV channels used by index.html.
  Supports: HLS (.m3u8), DASH (.mpd with ClearKey DRM), and YouTube embeds.
*/

const combinedChannels = [
  /* ---------- HLS STREAMS ---------- */
  { name: "Jugo Pinoy TV", type: "hls", category: "Local Channels",
    url: "https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8" },

  { name: "Sinemanila", type: "hls", category: "Local Channels",
    url: "https://live20.bozztv.com/giatv/giatv-sinemanila/sinemanila/playlist.m3u8" },

  { name: "SUPER RADYO DZBB", type: "hls", category: "Local Channels",
    url: "https://stream.gmaNews.tv/ioslive/livestream/playlist.m3u8" },

  { name: "5 StarMax", type: "hls", category: "Movie Channels",
    url: "http://23.237.104.106:8080/USA_5STARMAX/index.m3u8" },

  { name: "AMC", type: "hls", category: "Movie Channels",
    url: "http://jabawalkies.club:8080/Yge18mSBSG/Tygp63MXun/1527" },

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
    category: "Local Channels",
    clearKey: {
      "227ffaf09bec4a889e0e0988704d52a2": "b2d0dce5c486891997c1c92ddaca2cd2"
    }
  },

  {
    name: "CELESTIAL MOVIES PINOY",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/celmovie_pinoy_sd/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "0f8537d8412b11edb8780242ac120002": "2ffd7230416150fd5196fd7ea71c36f3"
    }
  },

  {
    name: "Cinema One Global",
    type: "dash",
    url: "https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
    category: "Local Channels",
    clearKey: {
      "58d0e56991194043b8fb82feb4db7276": "d68f41b59649676788889e19fb10d22c"
    }
  },

  {
    name: "Cinemo",
    type: "dash",
    url: "https://live-faws.akamaized.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
    category: "Local Channels",
  },

  {
    name: "Cinemo Global",
    type: "dash",
    url: "https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd",
    category: "Local Channels",
    clearKey: {
      "aa8aebe35ccc4541b7ce6292efcb1bfb": "aab1df109d22fc5d7e3ec121ddf24e5f"
    }
  },

  {
    name: "DZMM TELERADYO",
    type: "dash",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd",
    category: "Local Channels",
    clearKey: {
      "47c093e0c9fd4f80839a0337da3dd876": "50547394045b3d047dc7d92f57b5fb33"
    }
  },

  {
    name: "Heart of Asia",
    type: "dash",
    url: "https://kaotv.ganbaruby23.xyz/dash/heartofasia/manifest.mpd",
    category: "Local Channels",
    clearKey: {
      "16ecd238c0394592b8d3559c06b1faf5": "05b47ae3be1368912ebe28f87480fc84"
    }
  },

  {
    name: "I Heart Movies",
    type: "dash",
    url: "https://kaotv.ganbaruby23.xyz/dash/iheartmovies/manifest.mpd",
    category: "Local Channels",
    clearKey: {
      "abba271e8bcf552bbd2e86a434a9a5d9": "69eaa802a6763af979e8d1940fb88392"
    }
  },

  {
    name: "Kapamilya Channel",
    type: "dash",
    url: "https://d1uf7s78uqso1e.cloudfront.net/out/v1/efa01372657648be830e7c23ff68bea2/index.mpd",
    category: "Local Channels",
  },

  {
    name: "KAPAMILYA CHANNEL HD",
    type: "dash",
    url: "https://live-faws.akamaized.net/out/v1/efa01372657648be830e7c23ff68bea2/index.mpd",
    category: "Local Channels",
  },

  {
    name: "KNOWLEDGE CHANNEL",
    type: "dash",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
    category: "Local Channels",
    clearKey: {
      "0f856fa0412b11edb8780242ac120002": "783374273ef97ad3bc992c1d63e091e7"
    }
  },

  {
    name: "ONE PH",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/oneph_sd/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "92834ab4a7e1499b90886c5d49220e46": "a7108d9a6cfcc1b7939eb111daf09ab3"
    }
  },

  {
    name: "ONE NEWS",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "d39eb201ae494a0b98583df4d110e8dd": "6797066880d344422abd3f5eda41f45f"
    }
  },

  {
    name: "ONE NEWS",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "d39eb201ae494a0b98583df4d110e8dd": "6797066880d344422abd3f5eda41f45f"
    }
  },

  {
    name: "ONE SPORTS",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "53c3bf2eba574f639aa21f2d4409ff11": "3de28411cf08a64ea935b9578f6d0edd"
    }
  },

  {
    name: "ONE SPORTS PLUS",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "322d06e9326f4753a7ec0908030c13d8": "1e3e0ca32d421fbfec86feced0efefdaf"
    }
  },

  {
    name: "PBA Rush",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_pbarush_hd1/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "76dc29dd87a244aeab9e8b7c5da1e5f3": "95b2f2ffd4e14073620506213b62ac82"
    }
  },

  {
    name: "PBO",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pbo_sd/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "dcbdaaa6662d4188bdf97f9f0ca5e830": "31e752b441bd2972f2b98a4b1bc1c7a1"
    }
  },

  {
    name: "RPTV",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cnn_rptv_prod_hd/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "1917f4caf2364e6d9b1507326a85ead6": "a1340a251a5aa63a9b0ea5d9d7f67595"
    }
  },

  {
    name: "SARI-SARI",
    type: "dash",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
    category: "Local Channels",
    clearKey: {
      "0a7ab3612f434335aa6e895016d8cd2d": "b21654621230ae21714a5cab52daeb9d"
    }
  },

  {
    name: "TFC Asia",
    type: "dash",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/index.mpd",
    category: "Local Channels",
    clearKey: {
      "9568cc84e1d944f38eac304517eab6fd": "f12142af8f39b3bab79d3679d3665ebe"
    }
  },

  {
    name: "TMC",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tagalogmovie/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "96701d297d1241e492d41c397631d857": "ca2931211c1a261f082a3a2c4fd9f91b"
    }
  },

  {
    name: "TRUE TV",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/truefm_tv/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "0559c95496d44fadb94105b9176c3579": "40d8bb2a46ffd03540e0c6210ece57ce"
    }
  },

  {
    name: "TV5",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/tv5_hd/default1/index.mpd",
    category: "Local Channels",
    clearKey: {
      "2615129ef2c846a9bbd43a641c7303ef": "07c7f996b1734ea288641a68e1cfdc4d"
    }
  },

   {
    name: "TVN Movies Pinoy",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnmovie/default/index.mpd",
     category: "Local Channels",
    clearKey: {
      "2e53f8d8a5e94bca8f9a1e16ce67df33": "3471b2464b5c7b033a03bb8307d9fa35"
    }
  },

   {
    name: "TVUP",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/tvup_prd/default/index.mpd",
    category: "Local Channels",
    clearKey: {
      "3e813ccd4ca4837afd611037af02f63": "a97c515dbcb5dcbc432bbd09d15afd41"
    }
  },

   {
    name: "UAAP VARSITY",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_uaap_cplay_sd/default/index.mpd",
     category: "Local Channels",
    clearKey: {
      "95588338ee37423e99358a6d431324b9": "6e0f50a12f36599a55073868f814e81e"
    }
  },

   {
    name: "VIVA CINEMA",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/viva_sd/default/index.mpd",
     category: "Local Channels",
    clearKey: {
      "07aa813bf2c147748046edd930f7736e": "3bd6688b8b44e96201e753224adfc8fb"
    }
  },

  {
    name: "CELESTIAL MOVIES",
    type: "dash",
    url: "http://linearjitp-playback.astro.com.my/dash-wv/linear/506/default_ott.mpd",
     category: "Movie Channels",
    clearKey: {
      "c5c1ba26907291afec11a9a78d513410": "361197805d0149c29801946cf2dde67c"
    }
  },
];
