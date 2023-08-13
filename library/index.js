const headerMenu = document.querySelector(".header__menu");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");

headerMenu.addEventListener("click", () => {
  popup.classList.add("popup_enable");
});

popup.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    popup.classList.remove("popup_enable");
  }

  console.log(event.target.lastElementChild)
});

popupCloseButton.addEventListener("click", () => {
  popup.classList.remove("popup_enable");
});
