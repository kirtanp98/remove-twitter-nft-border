const test = chrome.windows.getCurrent();

MutationObserver = test.MutationObserver || test.WebKitMutationObserver;

if (document.URL.indexOf("twiter") != -1) {
  const observer = new MutationObserver((m, o) => {
    removeNFTBorder();
    console.log("removing", m, o);
  });
  observer.observe(document, { subtree: true, childList: true });
}
