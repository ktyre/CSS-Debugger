window.onload = function() {
  var el = document.getElementById('debug');

  el.addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(debug);
  }, false);
}

function debug() {
  var all = document.getElementsByTagName("*");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.border = "1px solid blue";
  };
};