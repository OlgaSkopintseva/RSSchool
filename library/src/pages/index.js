const headerMenu = document.querySelector(".header__menu");
const headerIcon = document.querySelector(".header__profile-icon");

const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const popupLinks = document.querySelectorAll(".popup__navigation-link");

const popupIcon = document.querySelector(".popup__icon-profile");
const popupNoAuth = document.querySelector(".popup_no-auth");

const popupLinkRegister = document.querySelector(
  ".popup__button-profile_register"
);
const digitalLibrarySignUp = document.querySelector(".digital__button_sign-up");
const popupRegisterCloseButton = document.querySelector(
  ".popup__close_register"
);
const popupRegister = document.querySelector(".popup_register");

const popupLinkLogin = document.querySelector(".popup__button-profile_login");
const digitalLibraryLogin = document.querySelector(".digital__button_log-in");
const popupLogin = document.querySelector(".popup_login");
const popupLoginCloseButton = document.querySelector(".popup__close_login");

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

//icon profile in header//

headerIcon.addEventListener("click", () => {
  popupNoAuth.classList.add("popup_enable");
});

popupNoAuth.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_no-auth")) {
    popupNoAuth.classList.remove("popup_enable");
  }
});

//icon profile in popup//

popupIcon.addEventListener("click", () => {
  popupNoAuth.classList.add("popup_enable");
});

popupNoAuth.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_no-auth")) {
    popupNoAuth.classList.remove("popup_enable");
  }
});

popupIcon.addEventListener("click", () => {
  popup.classList.remove("popup_enable");
  popupNoAuth.classList.add("popup_enable");
});

// document.addEventListener("click", (event) => {
//   if (!popupNoAuth.contains(event.target) && !popupIcon.contains(event.target)) {
//     popupNoAuth.classList.remove("popup_enable");
//   }
// });

//click on Register button//

popupLinkRegister.addEventListener("click", () => {
  popupRegister.classList.add("popup_enable");
});

popupRegister.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_register")) {
    popupRegister.classList.remove("popup_enable");
  }
});

popupRegisterCloseButton.addEventListener("click", () => {
  popupRegister.classList.remove("popup_enable");
});

popupLinkRegister.addEventListener("click", () => {
  popupNoAuth.classList.remove("popup_enable");
  popupRegister.classList.add("popup_enable");
});

//click on digital card sign up//

digitalLibrarySignUp.addEventListener("click", () => {
  popupRegister.classList.add("popup_enable");
});

//click on login button//

popupLinkLogin.addEventListener("click", () => {
  popupLogin.classList.add("popup_enable");
});

popupLoginCloseButton.addEventListener("click", () => {
  popupLogin.classList.remove("popup_enable");
});

popupLinkLogin.addEventListener("click", () => {
  popupNoAuth.classList.remove("popup_enable");
  popupLogin.classList.add("popup_enable");
});

popupLogin.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_login")) {
    popupLogin.classList.remove("popup_enable");
  }
});

// popupLoginCloseButton.addEventListener("click", )

digitalLibraryLogin.addEventListener("click", () => {
  popupLogin.classList.add("popup_enable");
});
