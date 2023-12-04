var beforeLoadTime = new Date().getTime();
window.onload = pageLoadTime;

function pageLoadTime() {
  var afterLoadTime = new Date().getTime();
  pageLoadTime = (afterLoadTime - beforeLoadTime) / 1000;

  document.getElementById("loadtime").innerHTML = "<font color='#D7D7D9'>"  + pageLoadTime + "</font>";
}