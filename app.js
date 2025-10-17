// === NZM IPTV APP.JS ===

// DOM Elements
const channelList = document.getElementById("channelList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const modal = document.getElementById("playerModal");
const closeModal = document.getElementById("closeModal");
const video = document.getElementById("videoPlayer");
const channelTitle = document.getElementById("channelTitle");

let player;
let currentChannel = null;

// === INITIALIZE APP ===
document.addEventListener("DOMContentLoaded", () => {
  if (typeof channels === "undefined") {
    console.error("❌ channels.js not loaded!");
    return;
  }

  renderChannels(channels);
  populateCategories(channels);

  searchInput.addEventListener("input", filterChannels);
  categoryFilter.addEventListener("change", filterChannels);
  closeModal.addEventListener("click", closePlayer);
});

// === RENDER CHANNELS ===
function renderChannels(channelData) {
  channelList.innerHTML = "";
  channelData.forEach((ch, index) => {
    const card = document.createElement("div");
    card.className = "channel-card";
    card.innerHTML = `
      <img src="${ch.logo || "https://i.imgur.com/dcLMI0b.png"}" alt="${ch.name}">
      <div class="channel-name">${ch.name}</div>
    `;
    card.addEventListener("click", () => openPlayer(ch));
    channelList.appendChild(card);
  });
}

// === POPULATE CATEGORY DROPDOWN ===
function populateCategories(channelData) {
  const uniqueCategories = [...new Set(channelData.map(ch => ch.category))].sort();
  uniqueCategories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// === FILTER CHANNELS (SEARCH + CATEGORY) ===
function filterChannels() {
  const query = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  
  const filtered = channels.filter(ch => {
    const matchesSearch = ch.name.toLowerCase().includes(query);
    const matchesCategory = selectedCategory === "all" || ch.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  renderChannels(filtered);
}

// === OPEN PLAYER MODAL ===
async function openPlayer(channel) {
  currentChannel = channel;
  modal.classList.add("show");
  channelTitle.textContent = channel.name;

  if (player) {
    player.destroy();
  }

  player = new shaka.Player(video);
  shaka.polyfill.installAll();

  player.addEventListener("error", evt => console.error("❌ Player Error:", evt.detail));

  try {
    if (channel.type === "dash") {
      // ClearKey DRM
      if (channel.clearKey) {
        const keySystem = {
          "org.w3.clearkey": {
            "clearkeys": channel.clearKey
          }
        };
        await player.configure({ drm: { servers: keySystem } });
      }

      // Widevine DRM
      if (channel.drm && channel.drm.widevine) {
        await player.configure({
          drm: {
            servers: {
              "com.widevine.alpha": channel.drm.widevine
            }
          }
        });
      }
    }

    await player.load(channel.url);
    video.play().catch(err => console.warn("Autoplay blocked:", err));

    console.log(`▶️ Now playing: ${channel.name}`);
  } catch (error) {
    console.error("Failed to play stream:", error);
    retryPlayback();
  }
}

// === AUTO-RECONNECT ===
function retryPlayback(retries = 3, delay = 3000) {
  if (!currentChannel || retries <= 0) return;
  console.warn(`Reconnecting to ${currentChannel.name}... (${retries} tries left)`);

  setTimeout(async () => {
    try {
      await player.load(currentChannel.url);
      video.play();
      console.log("✅ Reconnected!");
    } catch (err) {
      retryPlayback(retries - 1, delay);
    }
  }, delay);
}

// === CLOSE PLAYER ===
function closePlayer() {
  modal.classList.remove("show");
  video.pause();
  video.src = "";
  if (player) {
    player.destroy();
    player = null;
  }
  currentChannel = null;
  }
