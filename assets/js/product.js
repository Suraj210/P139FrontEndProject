"use strict";

// --------------------Header starts--------------------

// --------------------Top Navigation--------------------

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

// --------------------Bottom Navigation--------------------

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

//-------------------- Search--------------------

let searchOpen = document.querySelector(".search-open");
let searchClose = document.querySelector(".search-close");
let searchAreaClose = document.querySelector(".nav-area_close");
let searchArea = document.querySelector(".nav-search");
let searchInput = document.querySelector(".nav-search input");

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
  searchInput.value = "";
  document.querySelector("body").style.overflow = "initial";
});

// --------------------Side bar--------------------

let sideDropIcon = document.querySelectorAll(".sideDropIcon");

sideDropIcon.forEach((drop) => {
  let sideDropMenu = drop.parentNode.nextElementSibling.firstElementChild;
  drop.addEventListener("click", function () {
    sideDropMenu.classList.toggle("d-none");
  });
});

// --------------------Side bar toggle --------------------

let sideBar = document.querySelector(".nav-bottom_sideBar");
let sideBarToggle = document.querySelectorAll(".sideBarToggle");
let overlay = document.querySelector("header .overlay");

sideBarToggle.forEach((elem) => {
  elem.addEventListener("click", function () {
    sideBar.classList.toggle("transformLeft");
    overlay.classList.toggle("d-none");
  });
});

overlay.addEventListener("click", function () {
  overlay.classList.toggle("d-none");
  sideBar.classList.toggle("transformLeft");
});

// -------------------- Header ends --------------------

// Footer

// Shop cards
$(document).ready(function () {
  $("div[data-slick]").slick();
});

//-------------------- Modal--------------------
let modal = document.querySelector(".boxs");

let openModalIcons = document.querySelectorAll(
  ".product .product--icons i:nth-child(2)"
);
let iconClose = document.querySelector(".boxs .close-modal");
let modalOverlay = document.querySelector("main .overlay");

openModalIcons.forEach((modalBox) => {
  modalBox.addEventListener("click", function () {
    // Modal Display
    modal.classList.remove("d-none");
    modalOverlay.classList.remove("d-none");
    document.querySelector("body").style.overflow = "hidden";

    // Product info

    let productImg =
      this.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.children[0].children[0].getAttribute(
        "src"
      );

    let productText =
      this.parentNode.parentNode.parentNode.previousElementSibling.children[1]
        .innerText;

    modal.children[0].children[0].children[0].children[0].setAttribute(
      "src",
      productImg
    );

    modal.children[0].children[0].nextElementSibling.children[0].children[0].innerText =
      productText;
  });
});

iconClose.addEventListener("click", function () {
  modal.classList.add("d-none");
  modalOverlay.classList.add("d-none");
  document.querySelector("body").style.overflow = "initial";
});

modalOverlay.addEventListener("click", function () {
  modal.classList.add("d-none");
  modalOverlay.classList.add("d-none");
  document.querySelector("body").style.overflow = "initial";
});

// Getting details for Product details

let basket = [];

let cardDetailBtn = document.querySelectorAll(".product a");

cardDetailBtn.forEach((detailBtn) => {
  detailBtn.addEventListener("click", function () {
    let cardName = this.nextElementSibling.children[1].innerText;
    let cardImg = this.children[0].children[0].getAttribute("src");

    basket.push({
      name: cardName,
      image: cardImg,
      count: 1,
    });

    localStorage.setItem("basket", JSON.stringify(basket));
  });
});

// Set item details for Product details

let details = [];
let card = document.querySelector(".detail-boxs");
details = JSON.parse(localStorage.getItem("basket"));

if (localStorage.getItem("basket") != null) {
  details = JSON.parse(localStorage.getItem("basket"));
  for (const detail of details) {
    card.children[0].children[1].children[0].children[0].innerText =
      detail.name;
    card.children[0].children[0].children[0].children[0].setAttribute(
      "src",
      detail.image
    );
  }
}
