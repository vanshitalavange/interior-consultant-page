var btnMenu = document.querySelector(".btn-menu");
var mobileMenu = document.querySelector(".mobile-menu");
var btn = document.querySelector(".btn");
var homePage = document.querySelector(".page");
var btnClose = document.querySelector(".btn-close");
function openMenu() {
  mobileMenu.style.display = "block";
  homePage.style.display = "none";
}

function closeMenu() {
  mobileMenu.style.display = "none";
  homePage.style.display = "flex";
}

btnMenu.addEventListener("click", openMenu);

btnClose.addEventListener("click", closeMenu);

function eventHandler() {
  var deviceWidth = document.body.clientWidth;
  if (deviceWidth > 480) {
    closeMenu();
  }
}

window.addEventListener("resize", eventHandler);
