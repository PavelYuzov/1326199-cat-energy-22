const main = document.querySelector(".main-nav");
const main_header = document.querySelectorAll(".page-header");
const button_main = document.querySelector(".page-header__button");
const button_burger = document.querySelector(".page-header__button--burger");
const button_dagger = document.querySelector(".page-header__button--dagger");
const button_nojs = document.querySelector(".page-header__button--nojs");
const main_close = document.querySelector(".main-nav--close");
const main_nojs = document.querySelector(".main-nav--nojs");

main.classList.remove("main-nav--nojs");
button_main.classList.remove("page-header__button--nojs");

button_main.addEventListener("click", function(evt) {
  evt.preventDefault();

  main.classList.toggle("main-nav--close");

  button_main.classList.toggle("page-header__button--burger");
  button_main.classList.toggle("page-header__button--dagger");
});
