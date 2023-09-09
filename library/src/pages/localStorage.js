import { openPopupBuyCard } from "./slider.js";
import { booksArray } from "./constant.js";

const popupRegister = document.querySelector(".popup_register");
const popupLogin = document.querySelector(".popup_login");
const popupBuyCard = document.querySelector(".popup__buy-card");
const popupError = document.querySelector(".popup_error");

const registerForm = document.forms.registerForm;
const loginForm = document.forms.loginForm;
const buyCardForm = document.forms.buyCardForm;

const iconProfile = document.querySelector(".header__profile-icon");
const userName = document.querySelector(".popup__profile_avatar-bg");
const userFullName = document.querySelector(".popup__profile_name-bg");

const popupNoAuth = document.querySelector(".popup_no-auth");
const popupWithAuth = document.querySelector(".popup_with-auth");

const digitalFindCard = document.querySelector(".digital");
const digitalYourCard = document.querySelector(".digital_your-card");

const userCredencial = JSON.parse(localStorage.getItem("registerForm"));

const favoritesButtonsBuy = document.querySelectorAll(
  ".favorites__card-button"
);
const popupBuyCardCloseButton = document.querySelector(
  ".popup__close_buy-card"
);

const favoritesCards = document.querySelector(".favorites__cards");

function addUserProfileIcon() {
  iconProfile.classList.add("header__profile-icon_user");
  const initials = registerFirstName.slice(0, 1) + registerLastName.slice(0, 1);
  iconProfile.textContent = initials;
  userName.textContent = initials;
  userFullName.textContent = userFullName.textContent =
    registerFirstName + " " + registerLastName;

  iconProfile.addEventListener("click", function () {
    popupNoAuth.classList.remove("popup_enable");
    popupWithAuth.classList.add("popup_enable");
  });
}

function removeUserIconProfile() {
  iconProfile.classList.remove("header__profile-icon_user");
  iconProfile.addEventListener("click", function () {
    popupWithAuth.classList.remove("popup_enable");
    popupNoAuth.classList.add("popup_enable");
  });
}

function generateCardNumber() {
  let cardNumber = localStorage.getItem("cardNumber");

  const cardNumberWithAuth = document.querySelector(".popup__title_with-auth");
  cardNumberWithAuth.textContent = cardNumber;

  const cardNumberProfile = document.querySelector(
    ".popup__text_profile-card-number"
  );
  cardNumberProfile.textContent = cardNumber;

  cardNumberProfile.textContent = localStorage.getItem("cardNumber");
}

function removePopupError() {
  popupError.classList.add("popup_enable");
  popupError.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup_error")) {
      popupError.classList.remove("popup_enable");
    }
  });
}

if (localStorage.getItem("loginForm")) {
  iconProfile.classList.add("header__profile-icon_user");
  const initials =
    userCredencial.firstName.slice(0, 1) + userCredencial.lastName.slice(0, 1);
  iconProfile.textContent = initials;
  userName.textContent = initials;
  userFullName.textContent =
    userCredencial.firstName + " " + userCredencial.lastName;

  iconProfile.addEventListener("click", function () {
    popupNoAuth.classList.remove("popup_enable");
    popupWithAuth.classList.add("popup_enable");
  });

  digitalFindCard.style.display = "none";
  digitalYourCard.style.display = "block";

  let cardNumber = localStorage.getItem("cardNumber");

  const cardNumberWithAuth = document.querySelector(".popup__title_with-auth");
  cardNumberWithAuth.textContent = cardNumber;

  const cardNumberProfile = document.querySelector(
    ".popup__text_profile-card-number"
  );
  cardNumberProfile.textContent = cardNumber;

  cardNumberProfile.textContent = localStorage.getItem("cardNumber");
} else {
  iconProfile.classList.remove("header__profile-icon_user");
  iconProfile.addEventListener("click", function () {
    popupWithAuth.classList.remove("popup_enable");
    popupNoAuth.classList.add("popup_enable");
  });

  digitalFindCard.style.display = "block";
  digitalYourCard.style.display = "none";
}

if (localStorage.getItem("buyCardForm")) {
  favoritesButtonsBuy.forEach((button) => {
    button.addEventListener("click", () => {
      popupBuyCard.style.display = "none";
    });
  });

  const digitalScore = document.querySelector(
    ".digital__container-form_footer-score-book"
  );
  const popupScore = document.querySelector(
    ".popup__footer_profile-score-book"
  );

  let bookCount = 0;

  favoritesButtonsBuy.forEach((button) => {
    button.addEventListener("click", function () {
      if (
        !button.classList.contains("favorites__card-button_color-brown_own")
      ) {
        bookCount++;

        digitalScore.textContent = bookCount;
        popupScore.textContent = bookCount;

        popupBuyCard.classList.remove("popup_enable");
        button.classList.add("favorites__card-button_color-brown_own");
        button.textContent = "Own";
        button.setAttribute("disabled", "true");

        localStorage.setItem("bookCount", JSON.stringify(bookCount));

        // const rentedBook = document.querySelector(
        //   ".popup__text_profile-book-name"
        // );

        // let selectedBookIndex = 0;

        // let selectedBook = booksArray[selectedBookIndex];

        // rentedBook.textContent =
        //   selectedBook.title + ", " + selectedBook.author;
      }
    });
  });
}

// click on logoutButton //

const logoutButton = document.querySelector(".popup__button-profile_log-out");

logoutButton.addEventListener("click", () => {
  iconProfile.classList.remove("header__profile-icon_user");
  iconProfile.textContent = "";
  popupWithAuth.classList.remove("popup_enable");

  iconProfile.addEventListener("click", () => {
    popupNoAuth.classList.add("popup_enable");
    popupWithAuth.classList.remove("popup_enable");
  });

  digitalFindCard.style.display = "block";
  digitalYourCard.style.display = "none";

  localStorage.removeItem("loginForm");

  // const digitalCardNumber = document.querySelector(
  //   ".digital__form-input_color-brown-card"
  // );
  // const cardNumber = localStorage.getItem("cardNumber");

  // const digitalCheckCard = document.querySelector(".digital__container-button");

  // digitalCheckCard.addEventListener("click", () => {
  //   if (cardNumber === digitalCardNumber.value) {
  //     digitalFindCard.style.display = "block";
  //   }
  // });

  openPopupBuyCard(favoritesCards);
});

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const registerFirstName = registerForm.elements.firstNameRegister.value;
  const registerLastName = registerForm.elements.lastNameRegister.value;
  const registerEmail = registerForm.elements.emailRegister.value;
  const registerPassword = registerForm.elements.passwordRegister.value;

  const formRegisterData = {
    firstName: registerFirstName,
    lastName: registerLastName,
    email: registerEmail,
    password: registerPassword,
  };

  iconProfile.classList.add("header__profile-icon_user");
  const initials = registerFirstName.slice(0, 1) + registerLastName.slice(0, 1);
  iconProfile.textContent = initials;
  userName.textContent = initials;
  userFullName.textContent = userFullName.textContent =
    registerFirstName + " " + registerLastName;

  localStorage.setItem("registerForm", JSON.stringify(formRegisterData));
  localStorage.setItem("loginForm", JSON.stringify(formRegisterData));

  iconProfile.addEventListener("click", function () {
    popupNoAuth.classList.remove("popup_enable");
    popupWithAuth.classList.add("popup_enable");
  });

  const cardNumber = Math.floor(Math.random() * 0x100000000)
    .toString(16)
    .padStart(9, "0");

  localStorage.setItem("cardNumber", cardNumber);

  const cardNumberWithAuth = document.querySelector(".popup__title_with-auth");
  cardNumberWithAuth.textContent = cardNumber;

  const cardNumberProfile = document.querySelector(
    ".popup__text_profile-card-number"
  );
  cardNumberProfile.textContent = cardNumber;

  cardNumberProfile.textContent = localStorage.getItem("cardNumber");

  openPopupBuyCard(favoritesCards);

  digitalFindCard.style.display = "none";
  digitalYourCard.style.display = "block";

  popupRegister.classList.remove("popup_enable");
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const loginEmail = loginForm.elements.emailLogin.value;
  const loginPassword = loginForm.elements.passwordLogin.value;

  if (
    userCredencial?.email === loginEmail &&
    userCredencial?.password === loginPassword
  ) {
    localStorage.setItem("loginForm", JSON.stringify(userCredencial));
    popupLogin.classList.remove("popup_enable");

    openPopupBuyCard(favoritesCards);
    // iconProfile.classList.add("header__profile-icon_user");
    // const initials =
    //   userCredencial.firstName.slice(0, 1) +
    //   userCredencial.lastName.slice(0, 1);
    // iconProfile.textContent = initials;
    // userName.textContent = initials;
    // userFullName.textContent =
    //   userCredencial.firstName + " " + userCredencial.lastName;

    iconProfile.addEventListener("click", function () {
      popupNoAuth.classList.remove("popup_enable");
      popupWithAuth.classList.add("popup_enable");
    });

    let cardNumber = localStorage.getItem("cardNumber");

    const cardNumberWithAuth = document.querySelector(
      ".popup__title_with-auth"
    );
    cardNumberWithAuth.textContent = cardNumber;

    const cardNumberProfile = document.querySelector(
      ".popup__text_profile-card-number"
    );
    cardNumberProfile.textContent = cardNumber;

    cardNumberProfile.textContent = localStorage.getItem("cardNumber");
  }
  if (userCredencial?.email === loginEmail) {
    loginForm.elements.emailLogin.classList.remove("error-input");
  } else {
    loginForm.elements.emailLogin.classList.add("error-input");
    popupError.classList.add("popup_enable");
    removePopupError();
  }

  if (userCredencial?.password === loginPassword) {
    loginForm.elements.passwordLogin.classList.remove("error-input");
  } else {
    loginForm.elements.passwordLogin.classList.add("error-input");
    popupError.classList.add("popup_enable");
    removePopupError();
  }

  if (
    userCredencial?.email !== loginEmail &&
    userCredencial?.password !== loginPassword
  ) {
    loginForm.elements.passwordLogin.classList.add("error-input");
    loginForm.elements.emailLogin.classList.add("error-input");
    popupError.classList.add("popup_enable");
    removePopupError();
  }
});

buyCardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const buyCarddNumber = buyCardForm.elements.bankCardName.value;
  const expirationCodeFirst = buyCardForm.elements.expirationCodeFirst.value;
  const expirationCodeSecond = buyCardForm.elements.expirationCodeSecond.value;
  const cvcBuyCard = buyCardForm.elements.cvcBuyCard.value;
  const cardholderName = buyCardForm.elements.cardholderName.value;
  const postalCode = buyCardForm.elements.postalCode.value;
  const userLocation = buyCardForm.elements.cityTown.value;

  const formBuyCardData = {
    bankBuyCard: buyCarddNumber,
    expirationCodeFirst: expirationCodeFirst,
    expirationCodeSecond: expirationCodeSecond,
    CVC: cvcBuyCard,
    cardholderName: cardholderName,
    postalCode: postalCode,
    location: userLocation,
  };

  localStorage.setItem("buyCardForm", JSON.stringify(formBuyCardData));

  openPopupBuyCard(favoritesCards);

  popupBuyCard.classList.remove("popup_enable");
});
