let menu = document.getElementById("menu-mobile");
function toggleMenu() {
  if (menu.style.height === "140px") {
    menu.style.height = "0px";
  } else {
    menu.style.height = "140px";
  }
}

let btnScroll = document.getElementById("scroll");

function scrollTop() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    btnScroll.style.opacity = 1;
  } else {
    btnScroll.style.opacity = 0;
  }
}
window.onscroll = function () {
  scrollTop();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
