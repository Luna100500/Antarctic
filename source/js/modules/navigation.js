const header = document.querySelector(".header__container");
const hederMain = document.querySelector(".header");
const logo = document.querySelector(".header__logo-svg");
const navigation = document.querySelector(".header__nav-list");
const cross = document.querySelector(".header__cross-button");
const toggle = document.querySelector(".header__toggle-button");
const wrapper = document.querySelector(".wrapper");
const wrapperOverlay = document.querySelector(".wrapper__overlay");
const navItem = document.querySelectorAll(".header__nav-link");

const initJs = () => {
  header.classList.remove("header__container--no-js");
  navigation.classList.remove("header__nav-list--no-js");
  hederMain.style.position = "absolute";
  navigation.classList.remove("header__nav-list--opened");
  logo.style.fill = "#f9fbfd";
};

initJs();

const closeMenu = () => {
  header.classList.remove("header__container--opened");
  cross.classList.remove("header__cross-button--opened");
  toggle.classList.add("header__toggle-button--opened");
  navigation.classList.remove("header__nav-list--opened");
};

const setOverlay = () => {
  wrapper.style.position = "fixed";
  wrapperOverlay.style.position = "fixed";
  wrapperOverlay.style.display = "block";
};

const removeOverlay = () => {
  wrapper.style.position = "relative";
  wrapperOverlay.style.position = "relative";
  wrapperOverlay.style.display = "none";
};

const openMenu = () => {
  header.classList.add("header__container--opened");
  logo.classList.add("header__logo-svg--opened");
  navigation.classList.add("header__nav-list--opened");
  cross.classList.add("header__cross-button--opened");
  logo.style.fill = "#011c40";
  setOverlay();
};

toggle.addEventListener("click", () => {
  openMenu();
});

cross.addEventListener("click", () => {
  closeMenu();
  logo.style.fill = "#f9fbfd";
  removeOverlay();
});

document.addEventListener("click", function (event) {
  if (wrapperOverlay.contains(event.target))
    closeMenu(), removeOverlay(), (logo.style.fill = "#f9fbfd");
});

navigation.onclick = function (event) {
  let navTarget = event.target.closest(".header__nav-link"); // (1)

  if (!navTarget) return; // (2)

  if (!navigation.contains(navTarget)) return; // (3)

  closeMenu();
  removeOverlay();
  logo.style.fill = "#f9fbfd";
};

const setLogo = () => {
  const windowLength = window.innerWidth;
  if (windowLength >= 768) {
    logo.style.fill = "#f9fbfd";
    removeOverlay();
  }
  if (
    windowLength < 768 &&
    navigation.classList.contains("header__nav-list--opened")
  ) {
    logo.style.fill = "#011c40";
    setOverlay();
  }
};

window.addEventListener("resize", function () {
  console.log("Размер окна изменен");
  setLogo();
});
