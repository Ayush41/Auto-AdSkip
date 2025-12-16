// Clicking the extension icon toggles it ON/OFF.
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enabled: true });
});

chrome.action.onClicked.addListener(() => {
  chrome.storage.sync.get("enabled", (data) => {
    const newState = !data.enabled;
    chrome.storage.sync.set({ enabled: newState });

    chrome.action.setBadgeText({
      text: newState ? "ON" : "OFF"
    });
  });
});

console.log("Auto-AdSkip extension is running.");