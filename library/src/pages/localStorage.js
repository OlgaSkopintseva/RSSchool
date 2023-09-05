const popupRegister = document.querySelector(".popup_register");
const popupLogin = document.querySelector(".popup_login");

const registerForm = document.forms.registerForm;
const loginForm = document.forms.loginForm;

const iconProfile = document.querySelector(".header__profile-icon");
const popupNoAuth = document.querySelector(".popup_no-auth");
const popupWithAuth = document.querySelector(".popup_with-auth");

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

  popupRegister.classList.remove("popup_enable");
  localStorage.setItem("registerForm", JSON.stringify(formRegisterData));

  iconProfile.classList.add("header__profile-icon_user");
  iconProfile.textContent =
    registerFirstName.slice(0, 1) + registerLastName.slice(0, 1);
  iconProfile.addEventListener("click", function () {
    if (popupWithAuth) {
      popupWithAuth.classList.add("popup_enable");
    }
  });
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const loginEmail = loginForm.elements.emailLogin.value;
  const loginPassword = loginForm.elements.passwordLogin.value;

  const formLoginData = {
    email: loginEmail,
    password: loginPassword,
  };

  popupLogin.classList.remove("popup_enable");
  localStorage.setItem("loginForm", JSON.stringify(formLoginData));
});
