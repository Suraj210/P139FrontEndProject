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

// Set product datas to basket
let basket = [];

if (localStorage.getItem("addToBasket") != null) {
  basket = JSON.parse(localStorage.getItem("addToBasket"));
  document.querySelector("#empty-cart").classList.add("d-none");
} else {
  document
    .querySelector(".right-basket .wishList-count")
    .classList.add("d-none");
  document.querySelector("#cart .table").classList.add("d-none");
  document.querySelector("#empty-cart").classList.remove("d-none");
}

if (basket.length == 0) {
  document.querySelector("#cart .table").classList.add("d-none");
  document.querySelector("#empty-cart").classList.remove("d-none");
  document
    .querySelector(".right-basket .wishList-count")
    .classList.add("d-none");
  document.querySelector("main .price").classList.add("d-none");
}

function basketCount() {
  let basketCount = 0;
  for (const item of basket) {
    basketCount += item.count;
  }
  return basketCount;
}

document.querySelector(".right-basket .wishList-count").innerText =
  basketCount();

showBasketDatas(basket);

function showBasketDatas(products) {
  let tableBody = document.querySelector(".table tbody");
  for (const item of products) {
    tableBody.innerHTML += `<tr>
        <td><img src="${item.image}" alt=""></td>
        <td>${item.name}</td>
        <td><i data-id="${item.name}" class="fa-solid fa-minus" ></i><span>${
      item.count
    } </span><i data-id="${item.name}" class="fa-solid fa-plus "></i></td>
        <td>${item.price} $</td>
        <td>${Math.round(item.price * item.count)} $</td>
        <td>
            <button data-id="${
              item.name
            }" class="btn btn-danger delete-btn">Delete</button>
        </td>
        </tr>`;
  }
  totalPrice();
}

function totalPrice() {
  let total = 0;

  for (const item of basket) {
    total += Math.round(item.price * item.count);
    document.querySelector("main .total-price").innerHTML = total + " $";
  }
}

deleteBasketItem();

function deleteBasketItem() {
  let deleteBtns = document.querySelectorAll(".table button");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let productName = this.getAttribute("data-id");

      let existProduct = basket.find((m) => m.name == productName);

      basket = basket.filter((m) => m.name != existProduct.name);

      localStorage.setItem("addToBasket", JSON.stringify(basket));

      document.querySelector(".right-basket .wishList-count").innerText =
        basketCount();
      this.parentNode.parentNode.remove();

      if (basket.length == 0) {
        document.querySelector("#cart .table").classList.add("d-none");
        document.querySelector("#empty-cart").classList.remove("d-none");
        document
          .querySelector(".right-basket .wishList-count")
          .classList.add("d-none");
        document.querySelector(".all-price .price").classList.add("d-none");
        document
          .querySelector(".all-price .total-price")
          .classList.add("d-none");
      }
      totalPrice();
    });
  });
}

let iconMinus = document.querySelectorAll(".fa-minus");

let iconPlus = document.querySelectorAll(".fa-plus");

iconPlus.forEach((plus) => {
  plus.addEventListener("click", function () {
    let productName = this.getAttribute("data-id");

    let existProduct = basket.find((m) => m.name == productName);

    existProduct.count++;

    localStorage.setItem("addToBasket", JSON.stringify(basket));
    this.previousElementSibling.innerText = existProduct.count;
    document.querySelector(".right-basket .wishList-count").innerText =
      basketCount();
    this.parentNode.nextElementSibling.nextElementSibling.innerText =
      Math.round(existProduct.price * existProduct.count) + " $";
    totalPrice();
  });
});

iconMinus.forEach((plus) => {
  plus.addEventListener("click", function () {
    let productName = this.getAttribute("data-id");
    let existProduct = basket.find((m) => m.name == productName);
    if (existProduct.count > 1) {
      existProduct.count--;

      localStorage.setItem("addToBasket", JSON.stringify(basket));
      this.nextElementSibling.innerText = existProduct.count;
      document.querySelector(".right-basket .wishList-count").innerText =
        basketCount();
      this.parentNode.nextElementSibling.nextElementSibling.innerText =
        Math.round(existProduct.price * existProduct.count) + " $";
      totalPrice();
    }
  });
});
