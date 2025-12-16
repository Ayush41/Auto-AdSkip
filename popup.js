const statusText = document.getElementById("status");
const toggleBtn = document.getElementById("toggleBtn");

function updateUI(enabled) {
  statusText.textContent = enabled ? "Status: ON" : "Status: OFF";
  toggleBtn.textContent = enabled ? "Turn OFF" : "Turn ON";
}

chrome.storage.sync.get("enabled", (data) => {
  updateUI(data.enabled ?? true);
});

toggleBtn.addEventListener("click", () => {
  chrome.storage.sync.get("enabled", (data) => {
    const newState = !data.enabled;
    chrome.storage.sync.set({ enabled: newState });
    updateUI(newState);

    chrome.action.setBadgeText({
      text: newState ? "ON" : "OFF"
    });
  });
});
