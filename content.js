// DOM auto-skipping ads script
function trySkipAd() {
  chrome.storage.sync.get("enabled", (data) => {
    if (!data.enabled) return;

    const buttons = document.querySelectorAll("button, div");

    buttons.forEach((el) => {
      const text = el.innerText?.toLowerCase();

      if (!text) return;

      if (
        text.includes("skip ad") ||
        text === "skip" ||
        text.includes("skip ads")
      ) {
        el.click();
        console.log("✅ Ad skipped");
      }
    });
  });
}

// Run every 500ms
setInterval(trySkipAd, 500);