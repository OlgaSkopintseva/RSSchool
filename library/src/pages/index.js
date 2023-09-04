const headerMenu = document.querySelector(".header__menu");
const headerIcon = document.querySelector(".header__profile-icon");
const headerIconUser = document.querySelector(".header__profile-icon_user");

const popup = document.querySelector(".popup");
const popups = document.querySelectorAll(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const popupLinks = document.querySelectorAll(".popup__navigation-link");

const popupNoAuth = document.querySelector(".popup_no-auth");
const popupWithAuth = document.querySelector(".popup_with-auth");

const popupRegister = document.querySelector(".popup_register");
const popupLinkRegister = document.querySelector(
  ".popup__button-profile_register"
);
const digitalLibrarySignUp = document.querySelector(".digital__button_sign-up");
const popupRegisterCloseButton = document.querySelector(
  ".popup__close_register"
);

const popupLogin = document.querySelector(".popup_login");
const popupLinkLogin = document.querySelector(".popup__button-profile_login");
const digitalLibraryLogin = document.querySelector(".digital__button_log-in");
const popupLoginCloseButton = document.querySelector(".popup__close_login");

function closeAllPopups() {
  popups.forEach((popup) => {
    popup.classList.remove("popup_enable");
  });
}

headerMenu.addEventListener("click", () => {
  closeAllPopups();
  headerMenu.style.opacity = "0";
  headerMenu.style.visibility = "hidden";
  popup.classList.add("popup_enable");
});

popup.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    popup.classList.remove("popup_enable");
    headerMenu.style.opacity = "1";
    headerMenu.style.visibility = "visible";
  }
});

popupCloseButton.addEventListener("click", () => {
  popup.classList.remove("popup_enable");
  headerMenu.style.opacity = "1";
  headerMenu.style.visibility = "visible";
});

popupLinks.forEach((link) => {
  link.addEventListener("click", () => {
    popup.classList.remove("popup_enable");
  });
});

//icon profile in header//

headerIcon.addEventListener("click", () => {
  closeAllPopups();
  popupNoAuth.classList.add("popup_enable");
  headerMenu.style.opacity = "1";
  headerMenu.style.visibility = "visible";
});

popupNoAuth.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_no-auth")) {
    popupNoAuth.classList.remove("popup_enable");
  }
});

popupNoAuth.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_no-auth")) {
    popupNoAuth.classList.remove("popup_enable");
  }
});

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

digitalLibraryLogin.addEventListener("click", () => {
  popupLogin.classList.add("popup_enable");
});

// document.addEventListener("DOMContentLoaded", function () {
//   const favoritesButtonsBuy = document.querySelectorAll(
//     ".favorites__card-button"
//   );

//   favoritesButtonsBuy.forEach((button) => {
//     button.addEventListener("click", () => {
//       const popupLogin = document.querySelector(".popup_login");
//       if (popupLogin) {
//         popupLogin.classList.add("popup_enable");
//       }
//     });
//   });
// });

headerIconUser.addEventListener("click", () => {
  closeAllPopups();
  popupWithAuth.classList.add("popup_enable");
  headerMenu.style.opacity = "1";
  headerMenu.style.visibility = "visible";
});

popupWithAuth.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_with-auth")) {
    popupWithAuth.classList.remove("popup_enable");
  }
});

popupWithAuth.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_with-auth")) {
    popupWithAuth.classList.remove("popup_enable");
  }
});