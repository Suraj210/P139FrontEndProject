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
let overlay = document.querySelector(".overlay");

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

// Shop section

let shopDropIcon = document.querySelectorAll(".product-drop-icon");

shopDropIcon.forEach((elem) => {
  elem.addEventListener("click", function () {
    this.parentNode.nextElementSibling.classList.toggle("d-none");
  });
});

// Filter by Price

(function () {
  var parent = document.querySelector(".range-slider");
  if (!parent) return;

  var rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    };
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
    };
  });
})();

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

function basketCount() {
  let basketCount = 0;
  for (const item of addToBasket) {
    basketCount += item.count;
  }
  return basketCount;
}

document.querySelector(".right-basket .wishList-count").innerText =
  basketCount();

cardDetailIcons.forEach((detailIcon) => {
  detailIcon.addEventListener("click", function (e) {
    e.preventDefault();

    // Get product datas
    let productName =
      this.parentNode.parentNode.parentNode.parentNode.previousElementSibling
        .children[1].innerText;
    let productPriceStr =
      this.parentNode.parentNode.parentNode.parentNode.previousElementSibling
        .children[2].innerText;

    let productPrice;
    if (productPriceStr.length > 7) {
      productPrice = parseFloat(
        productPriceStr.substring(7).trim().substring(1)
      );
    } else {
      productPrice = parseFloat(productPriceStr.trim().substring(1));
    }

    let productImg =
      this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.children[0].children[0].getAttribute(
        "src"
      );

    // Set product datas into the array

    let existProduct = addToBasket.find((m) => m.name == productName);

    if (existProduct != undefined) {
      existProduct.count++;
    } else {
      addToBasket.push({
        image: productImg,
        name: productName,
        price: productPrice,
        count: 1,
      });
    }

    localStorage.setItem("addToBasket", JSON.stringify(addToBasket));

    // Increase

    document.querySelector(".right-basket .wishList-count").innerText =
      basketCount();
    document
      .querySelector(".right-basket .wishList-count")
      .classList.remove("d-none");
  });
});

// Get details to add to wishlist
let addToWishlist = [];

let wishlistDetailIcons = document.querySelectorAll(
  ".product--icons .fa-heart"
);

if (localStorage.getItem("addToWishlist") != null) {
  addToWishlist = JSON.parse(localStorage.getItem("addToWishlist"));
} else {
  document
    .querySelector(".right-icons .wishList-count")
    .classList.add("d-none");
}

if (addToWishlist.length == 0) {
  document
    .querySelector(".right-icons .wishList-count")
    .classList.add("d-none");
}

function wishListCount() {
  let wishListCount = 0;
  for (const item of addToWishlist) {
    wishListCount += item.count;
  }
  return wishListCount;
}

document.querySelector(".right-icons .wishList-count").innerText =
  wishListCount();

wishlistDetailIcons.forEach((detailIcon) => {
  detailIcon.addEventListener("click", function (e) {
    e.preventDefault();

    // Get product datas
    let productName =
      this.parentNode.parentNode.parentNode.parentNode.previousElementSibling
        .children[1].innerText;
    let productPriceStr =
      this.parentNode.parentNode.parentNode.parentNode.previousElementSibling
        .children[2].innerText;

    let productPrice;
    if (productPriceStr.length > 7) {
      productPrice = parseFloat(
        productPriceStr.substring(7).trim().substring(1)
      );
    } else {
      productPrice = parseFloat(productPriceStr.trim().substring(1));
    }

    let productImg =
      this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.children[0].children[0].getAttribute(
        "src"
      );

    // Set product datas into the array

    let existProduct = addToWishlist.find((m) => m.name == productName);

    if (existProduct != undefined) {
      existProduct.count++;
    } else {
      addToWishlist.push({
        image: productImg,
        name: productName,
        price: productPrice,
        count: 1,
      });
    }

    localStorage.setItem("addToWishlist", JSON.stringify(addToWishlist));

    // Increase

    document.querySelector(".right-icons .wishList-count").innerText =
      wishListCount();
    document
      .querySelector(".right-icons .wishList-count")
      .classList.remove("d-none");
  });
});
