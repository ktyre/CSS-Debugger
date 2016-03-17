chrome.runtime.onMessage.addListener(function(res, sender, sendRes) {
  chrome.tabs.executeScript(null, {
    // code: "debug()";
    file: "debugFunc.js"
  });
});

// function debug() {
//   var all = document.getElementsByTagName("*");
//   for (var i=0, max=all.length; i < max; i++) {
//     all[i].style.border = "1px solid blue";
//   };
// };