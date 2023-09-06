const popupRegister = document.querySelector(".popup_register");
const popupLogin = document.querySelector(".popup_login");

const registerForm = document.forms.registerForm;
const loginForm = document.forms.loginForm;

const iconProfile = document.querySelector(".header__profile-icon");
const userName = document.querySelector(".popup__profile_avatar-bg");
const userFullName = document.querySelector(".popup__profile_name-bg");

const popupNoAuth = document.querySelector(".popup_no-auth");
const popupWithAuth = document.querySelector(".popup_with-auth");
const popupBuyCard = document.querySelector(".popup__buy-card");

const digitalFindCard = document.querySelector(".digital");
const digitalYourCard = document.querySelector(".digital_your-card");

const userCredencial = JSON.parse(localStorage.getItem("registerForm"));

const favoritesButtonsBuy = document.querySelectorAll(
  ".favorites__card-button"
);
const popupBuyCardCloseButton = document.querySelector(
  ".popup__close_buy-card"
);

if (localStorage.getItem("registerForm")) {
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

  function generateCardNumber() {
    const cardNumber = Math.floor(Math.random() * 0x100000000).toString(16);
    return cardNumber.padStart(9, "0");
  }

  let cardNumber = localStorage.getItem("cardNumber");

  if (!cardNumber) {
    cardNumber = generateCardNumber();
    localStorage.setItem("cardNumber", cardNumber);
  }

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

if (localStorage.getItem("loginForm")) {
  document.addEventListener("DOMContentLoaded", function () {
    const favoritesButtonsBuy = document.querySelectorAll(
      ".favorites__card-button"
    );

    favoritesButtonsBuy.forEach((button) => {
      button.addEventListener("click", () => {
        const popupBuyCard = document.querySelector(".popup__buy-card");
        popupBuyCard.classList.add("popup_enable");
      });
    });
  });
} else {
  document.addEventListener("DOMContentLoaded", function () {
    const favoritesButtonsBuy = document.querySelectorAll(
      ".favorites__card-button"
    );

    favoritesButtonsBuy.forEach((button) => {
      button.addEventListener("click", () => {
        const popupLogin = document.querySelector(".popup_login");
        popupLogin.classList.add("popup_enable");
      });
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

  favoritesButtonsBuy.forEach((button) => {
    button.addEventListener("click", () => {
      popupBuyCard.classList.remove("popup_enable");
      popupLogin.classList.add("popup_enable");
    });
  });

  localStorage.clear()
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

  localStorage.setItem("registerForm", JSON.stringify(formRegisterData));

  popupRegister.classList.remove("popup_enable");

  window.location.reload();
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const loginEmail = loginForm.elements.emailLogin.value;
  const loginPassword = loginForm.elements.passwordLogin.value;

  const formLoginData = {
    email: loginEmail,
    password: loginPassword,
  };

  localStorage.setItem("loginForm", JSON.stringify(formLoginData));

  popupLogin.classList.remove("popup_enable");

  window.location.reload();
});
