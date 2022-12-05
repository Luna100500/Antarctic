const header = document.querySelector(".header");
const logo = document.querySelector(".header__logo-svg");
const navigation = document.querySelector(".header__nav-list");
const cross = document.querySelector(".header__cross-button");
const toggle = document.querySelector(".header__toggle-button");

const initJs = () => {
  header.classList.remove("header--opened");
  logo.classList.remove("header__logo-svg--opened");
  navigation.classList.remove("header__nav-list--opened");
  cross.classList.remove("header__cross-button--opened");
  logo.style.fill = "#f9fbfd";
};

initJs();

const openMenu = () => {
  header.classList.add("header--opened");
  logo.classList.add("header__logo-svg--opened");
  navigation.classList.add("header__nav-list--opened");
  cross.classList.add("header__cross-button--opened");
};

toggle.addEventListener("click", () => {
  openMenu();
});

cross.addEventListener("click", () => {
  initJs();
});
