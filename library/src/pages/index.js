const headerMenu = document.querySelector(".header__menu");
const headerIcon = document.querySelector(".header__profile-icon");

const popup = document.querySelector(".popup");
const popups = document.querySelectorAll(".popup");

const popupNoAuth = document.querySelector(".popup_no-auth");
const popupWithAuth = document.querySelector(".popup_with-auth");
const popupLogin = document.querySelector(".popup_login");
const popupRegister = document.querySelector(".popup_register");
const popupUserProfile = document.querySelector(".popup_profile");
const popupBuyCard = document.querySelector(".popup__buy-card");

const popupLinks = document.querySelectorAll(".popup__navigation-link");
const popupLinkLogin = document.querySelector(".popup__button-profile_login");
const popupLinkRegister = document.querySelector(
  ".popup__button-profile_register"
);
const popupLinkMyProfile = document.querySelector(
  ".popup__button-profile_my-profile"
);
const popupLinkProfileLogout = document.querySelector(
  ".popup__button-profile_log-out"
);
const digitalLibrarySignUp = document.querySelector(".digital__button_sign-up");
const digitalLibraryLogin = document.querySelector(".digital__button_log-in");
const digitalLibraryProfile = document.querySelector(
  ".digital__button_profile"
);

const popupCloseButton = document.querySelector(".popup__close");
const popupRegisterCloseButton = document.querySelector(
  ".popup__close_register"
);
const popupLoginCloseButton = document.querySelector(".popup__close_login");
const popupProfileCloseButton = document.querySelector(".popup__close_profile");
const popupBuyCardCloseButton = document.querySelector(
  ".popup__close_buy-card"
);

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

popupBuyCardCloseButton.addEventListener("click", () => {
  popupBuyCard.classList.remove("popup_enable");
});

popupBuyCard.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup__buy-card")) {
    popupBuyCard.classList.remove("popup_enable");
  }
});

// click on headerIconUser //

popupWithAuth.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_with-auth")) {
    popupWithAuth.classList.remove("popup_enable");
  }
});

// click on My profile button //

popupLinkMyProfile.addEventListener("click", () => {
  popupUserProfile.classList.add("popup_enable");
});

popupProfileCloseButton.addEventListener("click", () => {
  popupUserProfile.classList.remove("popup_enable");
});

popupUserProfile.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_profile")) {
    popupUserProfile.classList.remove("popup_enable");
  }
});

popupLinkMyProfile.addEventListener("click", () => {
  popupWithAuth.classList.remove("popup_enable");
  popupUserProfile.classList.add("popup_enable");
});

digitalLibraryProfile.addEventListener("click", () => {
  popupUserProfile.classList.add("popup_enable");
});

/* click on profile copy button */

const profileCardNumber = document.querySelector(".popup__text_profile-card-number");
const copyButton = document.querySelector(".popup__text_profile-copy");

copyButton.addEventListener("click", function () {
  const textToCopy = profileCardNumber.textContent;

  navigator.clipboard
    .writeText(textToCopy)
});
