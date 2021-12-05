function eventHandler() {
  var deviceWidth = document.body.clientWidth;
  if (deviceWidth > 480) {
    window.location.href = "index.html";
  }
}

window.addEventListener("resize", eventHandler);
