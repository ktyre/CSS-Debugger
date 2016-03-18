chrome.runtime.onConnect.addListener(function() {
  chrome.tabs.executeScript(null, {
    file: "debugFunc.js"
  });
});
