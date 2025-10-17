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
    name: "FX",
    type: "hls",
    url: "https://fl7.moveonjoy.com/FX/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/fx-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "FXM",
    type: "hls",
    url: "https://fl7.moveonjoy.com/FX_MOVIE/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/fxm-movie-channel-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "FXX",
    type: "hls",
    url: "https://fl7.moveonjoy.com/FYI/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/fxx-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Hits HD",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hits_hd1/default/index.mpd",
    logo: "https://i.imgur.com/CxqHKUO.png",
    category: "Movie Channels",
    clearKey: {
      "dac605bc197e442c93f4f08595a95100": "975e27ffc1b7949721ee3ccb4b7fd3e5"
    }
  },
  {
    name: "Hits Movies",
    type: "dash",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd",
    logo: "https://astromedia.com.my/wp-content/uploads/2023/12/hitsmovie2.jpeg",
    category: "Movie Channels",
    clearKey: {
      "f56b57b32d7e4b2cb21748c0b56761a7": "3df06a89aa01b32655a77d93e09e266f"
    }
  },
  {
    name: "Hits Now",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_hitsnow/default/index.mpd",
    logo: "https://i.imgur.com/tYfJVjx.png",
    category: "Movie Channels",
    clearKey: {
      "14439a1b7afc4527bb0ebc51cf11cbc1": "92b0287c7042f271b266cc11ab7541f1"
    }
  },
  {
    name: "Hi-Yah!",
    type: "hls",
    url: "https://linear-59.frequency.stream/dist/xumo/59/hls/master/playlist_1920x1080.m3u8",
    logo: "https://i.imgur.com/gGbiY5u.png",
    category: "Movie Channels"
  },
  {
    name: "HBO",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohd/default/index.mpd",
    logo: "https://i.imgur.com/pa2SF5Z.png",
    category: "Movie Channels",
    clearKey: {
      "d47ebabf7a21430b83a8c4b82d9ef6b1": "54c213b2b5f885f1e0290ee4131d425b"
    }
  },
  {
    name: "HBO2",
    type: "hls",
    url: "https://fl7.moveonjoy.com/HBO_2/index.m3u8",
    logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/HBO2._SL170_FMpng_.png",
    category: "Movie Channels"
  },
  {
    name: "HBO Comedy",
    type: "hls",
    url: "https://fl7.moveonjoy.com/HBO_COMEDY/index.m3u8",
    logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/HBO_Comedy._SL170_FMpng_.png",
    category: "Movie Channels"
  },
  {
    name: "HBO Hits",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohits/default1/index.mpd",
    logo: "https://i.imgur.com/pZn9JHj.png",
    category: "Movie Channels",
    clearKey: {
      "b04ae8017b5b4601a5a0c9060f6d5b7d": "a8795f3bdb8a4778b7e888ee484cc7a1"
    }
  },
  {
    name: "HBO Signature",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd",
    logo: "https://i.imgur.com/3BOoqQn.png",
    category: "Movie Channels",
    clearKey: {
      "a06ca6c275744151895762e0346380f5": "559da1b63eec77b5a942018f14d3f56f"
    }
  },
  {
    name: "HBO Family",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd",
    logo: "https://i.imgur.com/Zy3pvJV.png",
    category: "Movie Channels",
    clearKey: {
      "872910c843294319800d85f9a0940607": "f79fd895b79c590708cf5e8b5c6263be"
    }
  },
  {
    name: "HBO Zone",
    type: "hls",
    url: "https://fl7.moveonjoy.com/HBO_ZONE/index.m3u8",
    logo: "https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/HBO_Zone_East._SL170_FMpng_.png",
    category: "Movie Channels"
  },
  {
    name: "MovieSphere by Lionsgate",
    type: "hls",
    url: "https://live-manifest.production-public.tubi.io/live/050aaad2-b60d-4525-9e2e-2465b85cfa43/playlist.m3u8",
    logo: "https://images.pluto.tv/channels/645e7828e1979c00087b75b4/colorLogoPNG.png",
    category: "Movie Channels"
  },
  {
    name: "Movies Now",
    type: "dash",
    url: "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3suWaQrCK8hU-TD0_Oj9DcBQ8oZmiVXY5xDhzSZ4YkrBmnv5Ah-JmMPL&s=10",
    category: "Movie Channels",
    clearKey: {
      "40f019b86241d23ef075633fd7f1e927": "058dec845bd340178a388edd104a015e"
    }
  },
  {
    name: "RageTV",
    type: "hls",
    url: "https://live20.bozztv.com/giatv/giatv-ragetv/ragetv/playlist.m3u8",
    logo: "https://i.imgur.com/Ym32WqZ.png",
    category: "Movie Channels"
  },
  {
    name: "Rakuten Viki",
    type: "hls",
    url: "https://268d7193278949b4b4796e63861deee5.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/LG_RakutenViki/playlist.m3u8",
    logo: "https://images.sr.roku.com/idType/roku/context/trc/id/c4bdfe6fd751590e9d096b5de264bba1/https%3A%2F%2Fimage.roku.com%2Fbh-uploads%2Fproduction%2FinfoHUDLogo%2F1678995051754_image_hud1_260x147.png",
    category: "Movie Channels"
  },
  {
    name: "ScreamFlix",
    type: "hls",
    url: "https://jungotvstream.chanall.tv/jungotv/screamflix/playlist_720p.m3u8",
    logo: "https://i.imgur.com/Ym32WqZ.png",
    category: "Movie Channels"
  },
  {
    name: "Showtime",
    type: "hls",
    url: "https://fl7.moveonjoy.com/SHOWTIME/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Showtime 2",
    type: "hls",
    url: "https://fl7.moveonjoy.com/SHOWTIME_2/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-2-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Showtime Extreme",
    type: "hls",
    url: "https://fl7.moveonjoy.com/SHOWTIME_EXTREME/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-extreme-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Showtime Next",
    type: "hls",
    url: "https://fl7.moveonjoy.com/SHOWTIME_NEXT/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-next-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Showtime West",
    type: "hls",
    url: "https://fl7.moveonjoy.com/SHOWTIME_WEST/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Showtime Women",
    type: "hls",
    url: "https://fl7.moveonjoy.com/SHOWTIME_WOMEN/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-women-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Sony Movie Channel",
    type: "hls",
    url: "https://fl7.moveonjoy.com/Sony_Movie_Channel/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/sony-movie-channel-hz-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Start TV",
    type: "hls",
    url: "https://fl7.moveonjoy.com/Start_Tv/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/start-tv-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Starz",
    type: "hls",
    url: "https://fl7.moveonjoy.com/STARZ/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Starz Comedy",
    type: "hls",
    url: "https://fl7.moveonjoy.com/STARZ_COMEDY/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-comedy-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Starz Edge",
    type: "hls",
    url: "https://fl7.moveonjoy.com/STARZ_EDGE/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-edge-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Starz Encore Action",
    type: "hls",
    url: "https://fl7.moveonjoy.com/STARZ_ENCORE_ACTION/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-encore-action-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Starz Encore Classic",
    type: "hls",
    url: "https://fl7.moveonjoy.com/STARZ_ENCORE_CLASSIC/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-encore-classic-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Starz Encore Westerns",
    type: "hls",
    url: "https://fl7.moveonjoy.com/STARZ_ENCORE_WESTERNS/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-encore-westerns-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "Starz West",
    type: "hls",
    url: "https://fl7.moveonjoy.com/STARZ_WEST/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "SundanceTV",
    type: "hls",
    url: "https://fl7.moveonjoy.com/SUNDANCE/index.m3u8",
    logo: "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s16108_dark_360w_270h.png",
    category: "Movie Channels"
  },
  {
    name: "SYFY",
    type: "hls",
    url: "https://fl7.moveonjoy.com/SYFY/index.m3u8",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/syfy-us.png?raw=true",
    category: "Movie Channels"
  },
  {
    name: "TAP Action Flix",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tapactionflix_hd1/default/index.mpd",
    logo: "https://i.imgur.com/w64PvvF.png",
    category: "Movie Channels",
    clearKey: { "bee1066160c0424696d9bf99ca0645e3": "f5b72bf3b89b9848de5616f37de040b7" }
  },
  {
    name: "TAP Edge",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapedge/default/index.mpd",
    logo: "https://i.imgur.com/e7xA7qK.png",
    category: "Movie Channels",
    clearKey: { "4553f7e8011f411fb625cefc39274300": "98f2f1d153367e84b5d559dc9dfb9a35" }
  },
  {
    name: "TAP Movies",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tapmovies_hd1/default/index.mpd",
    logo: "https://i.imgur.com/3RVA5mV.png",
    category: "Movie Channels",
    clearKey: { "71cbdf02b595468bb77398222e1ade09": "c3f2aa420b8908ab8761571c01899460" }
  },
  {
    name: "TAP TV",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_taptv_sd/default/index.mpd",
    logo: "https://i.imgur.com/J6Olkop.png",
    category: "Movie Channels",
    clearKey: { "f6804251e90b4966889b7df94fdc621e": "55c3c014f2bd12d6bd62349658f24566" }
  },
  {
    name: "THRILL",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_thrill_sd/default/index.mpd",
    logo: "https://i.imgur.com/mNmRiMA.png",
    category: "Movie Channels",
    clearKey: { "928114ffb2394d14b5585258f70ed183": "a82edc340bc73447bac16cdfed0a4c62" }
  },
  {
    name: "TVN Movies",
    type: "dash",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2406/default_ott.mpd",
    logo: "https://i.imgur.com/oLzTyUX.png",
    category: "Movie Channels",
    clearKey: { "8e269c8aa32ad77eb83068312343d610": "d12ccebafbba2a535d88a3087f884252" }
  },
  {
    name: "Animax",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
    logo: "https://i.imgur.com/QxTehhs.png",
    category: "Anime/Cartoons",
    clearKey: { "92032b0e41a543fb9830751273b8debd": "03f8b65e2af785b10d6634735dbe6c11" }
  },
  {
    name: "Anime All Day",
    type: "hls",
    url: "https://jmp2.uk/stvp-USAJ3504502A",
    logo: "https://images.pluto.tv/channels/5812b7d3249444e05d09cc49/colorLogoPNG.png",
    category: "Anime/Cartoons"
  },
  {
    name: "AnimeX",
    type: "hls",
    url: "https://live20.bozztv.com/giatv/giatv-animex/animex/playlist.m3u8",
    logo: "https://i.imgur.com/0FLu8iV.png",
    category: "Anime/Cartoons"
  },
  {
    name: "Anime X HIDIVE",
    type: "hls",
    url: "https://amc-anime-x-hidive-1-us.tablo.wurl.tv/playlist.m3u8",
    logo: "https://i.imgur.com/E1LIeR2.png",
    category: "Anime/Cartoons"
  },
  {
    name: "Aniplus",
    type: "hls",
    url: "https://amg18481-amg18481c1-amgplt0352.playout.now3.amagi.tv/playlist/amg18481-amg18481c1-amgplt0352/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/animax/images/b/b8/Aniplus_Asia_Logo.png",
    category: "Anime/Cartoons"
  },
  {
    name: "Boomerang",
    type: "hls",
    url: "https://fl7.moveonjoy.com/BOOMERANG/index.m3u8",
    logo: "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s21883_dark_360w_270h.png",
    category: "Anime/Cartoons"
  }
];
