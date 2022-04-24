const execute = () => {
  const removeNFTBorder = () => {
    document.querySelectorAll('*[style*="clip-path"]').forEach((value) => {
      value.style["clipPath"] = "circle(50%)";
    });
  };

  removeNFTBorder();
};

async function tabAddDiv() {
  console.log("here");
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let res;
  try {
    res = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: execute,
    });
  } catch (e) {
    console.warn(e.message || e);
    return;
  }
}

setInterval(() => {
  tabAddDiv();
}, 1000);
