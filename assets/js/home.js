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

// Card

$(document).ready(function () {
  $("div[data-slick]").slick();

  $(".product-container").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".featured-products").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
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
    console.log(productImg);
    console.log(productText);
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

// cardDetailIcon.forEach((detailBtn) => {
//   detailBtn.addEventListener("click", function () {
//     let cardName = this.nextElementSibling.children[1].innerText;
//     let cardImg = this.children[0].children[0].getAttribute("src");

//     basket.push({
//       name: cardName,
//       image: cardImg,
//       count: 1,
//     });

//     localStorage.setItem("basket", JSON.stringify(basket));
//   });
// });

// Get details to add to basket

let addToBasket = [];

let cardDetailIcons = document.querySelectorAll(".fa-bag-shopping");

if (localStorage.getItem("addToBasket") != null) {
  addToBasket = JSON.parse(localStorage.getItem("addToBasket"));
} else {
  document
    .querySelector(".right-basket .wishList-count")
    .classList.add("d-none");
}

if (addToBasket.length == 0) {
  document
    .querySelector(".right-basket .wishList-count")
    .classList.add("d-none");
}

cardDetailIcons.forEach((detailIcon) => {
  detailIcon.addEventListener("click", function (e) {
    e.preventDefault();
    let productName =
      this.parentNode.parentNode.parentNode.parentNode.previousElementSibling
        .children[1].innerText;
    let productPriceStr =
      this.parentNode.parentNode.parentNode.parentNode.previousElementSibling
        .children[2].innerText;

    let productPrice;
    if (productPriceStr.length > 7) {
      productPrice = productPriceStr.substring(7);
    } else {
      productPrice = productPriceStr;
    }

    let productImg =
      this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.children[0].children[0].getAttribute(
        "src"
      );

    addToBasket.push({
      image: productImg,
      name: productName,
      price: productPrice,
      count: 1,
    });

    localStorage.setItem("addToBasket", JSON.stringify(addToBasket));

    console.log(productName);
    console.log(productPrice);
    console.log(productImg);
  });
});
