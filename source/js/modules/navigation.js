const header = document.querySelector(".header__container");
const logo = document.querySelector(".header__logo-svg");
const navigation = document.querySelector(".header__nav-list");
const cross = document.querySelector(".header__cross-button");
const toggle = document.querySelector(".header__toggle-button");

const initJs = () => {
  header.classList.remove("header__container--opened");
  logo.classList.remove("header__logo-svg--opened");
  navigation.classList.remove("header__nav-list--opened");
  cross.classList.remove("header__cross-button--opened");
  logo.style.fill = "#f9fbfd";
};

initJs();

const openMenu = () => {
  header.classList.add("header__container--opened");
  logo.classList.add("header__logo-svg--opened");
  navigation.classList.add("header__nav-list--opened");
  cross.classList.add("header__cross-button--opened");
  logo.style.fill = "#011c40";
};

toggle.addEventListener("click", () => {
  openMenu();
});

cross.addEventListener("click", () => {
  initJs();
});
