const mainNav = document.querySelector(".main-nav");
const mainHeader = document.querySelectorAll(".page-header");
const menuButton = document.querySelector(".page-header__button");

mainNav.classList.remove("main-nav--nojs");
menuButton.classList.remove("page-header__button--nojs");

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  mainNav.classList.toggle("main-nav--close");

  menuButton.classList.toggle("page-header__button--open");
  menuButton.classList.toggle("page-header__button--close");
});
