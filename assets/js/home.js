"use strict";

// Header starts

// Top Navigation

let navSocial = document.querySelector("header .nav-top_social");
let navDropdownSocial = document.querySelector(".nav-top_social--dropDown");
let dropDownLang = document.querySelector(".dropDownLang");
let dropDownCurr = document.querySelector(".dropDownCurr");
let language = document.querySelector(".nav-top_lang");
let currency = document.querySelector(".nav-top_curr");
let dropMenu = document.querySelectorAll(".mouseOverHeight");

navSocial.addEventListener("click", function () {
  navDropdownSocial.classList.toggle("d-none");
});

language.addEventListener("mouseover", function (e) {
  e.preventDefault();
  dropDownLang.classList.toggle("d-none");
});

language.addEventListener("mouseout", function (e) {
  e.preventDefault();
  dropDownLang.classList.toggle("d-none");
});

currency.addEventListener("mouseover", function (e) {
  e.preventDefault();
  dropDownCurr.classList.toggle("d-none");
});

currency.addEventListener("mouseout", function (e) {
  e.preventDefault();
  dropDownCurr.classList.toggle("d-none");
});

// Bottom Navigation

dropMenu.forEach((elem) => {
  elem.addEventListener("mouseover", function (e) {
    e.preventDefault();
    this.children[1].classList.toggle("d-none");
  });

  elem.addEventListener("mouseout", function (e) {
    e.preventDefault();
    this.children[1].classList.toggle("d-none");
  });
});

let searchOpen = document.querySelector(".search-open");
let searchClose = document.querySelector(".search-close");
let searchAreaClose = document.querySelector(".nav-area_close");
let searchArea = document.querySelector(".nav-search");

searchOpen.addEventListener("click", function (e) {
  e.preventDefault();
  searchOpen.classList.toggle("d-none");
  searchClose.classList.toggle("d-none");
  searchArea.classList.toggle("d-none");
  document.querySelector("body").style.overflow = "hidden";
});

searchAreaClose.addEventListener("click", function () {
  searchArea.classList.toggle("d-none");
  searchClose.classList.toggle("d-none");
  searchOpen.classList.toggle("d-none");
  document.querySelector("body").style.overflow = "initial";
});
