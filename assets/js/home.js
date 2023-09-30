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
