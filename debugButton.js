window.onload = function() {
  var el = document.getElementById('debug');

  el.addEventListener('click', function() {
    chrome.runtime.connect();
  }, true);
}
