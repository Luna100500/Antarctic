const item = document.querySelectorAll(".catalog__info");
const preview = document.querySelectorAll(".catalog__preview");
const catalogItem = document.querySelectorAll(".catalog__item");

const showPreview = () => {
  for (let i = 0; i < item.length; i++) {
    item[i].style.zIndex = "-1";
  }
};

showPreview();

for (let i = 0; i < catalogItem.length; i++) {
  setTimeout(1000);
  catalogItem[i].onmouseover = function () {
    preview[i].style.zIndex = "-1";
    preview[i].style.display = "none";
    item[i].style.zIndex = "1";
  };
  catalogItem[i].onmouseout = function () {
    preview[i].style.zIndex = "1";
    preview[i].style.display = "flex";
    item[i].style.zIndex = "-1";
  };
}
