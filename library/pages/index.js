const headerMenu = document.querySelector(".header__menu");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const popupLinks = document.querySelectorAll(".popup__navigation-link");

headerMenu.addEventListener("click", () => {
  popup.classList.add("popup_enable");
});

popup.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    popup.classList.remove("popup_enable");
  }
});

popupCloseButton.addEventListener("click", () => {
  popup.classList.remove("popup_enable");
});

popupLinks.forEach((link) => {
  link.addEventListener("click", () => {
    popup.classList.remove("popup_enable");
  });
});
