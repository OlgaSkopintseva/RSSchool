const popupRegisterForm = document.querySelector(".popup__form_register");
const iconProfile = document.querySelector(".header__profile-icon");

popupRegisterForm.addEventListener("submit", function () {
  const registerFirstName = popupRegisterForm.querySelector(
    "#register_first-name"
  ).value;
  const registerLastName = popupRegisterForm.querySelector(
    "#register_last-name"
  ).value;
  const registerEmail =
    popupRegisterForm.querySelector("#register_email").value;
  const registerPassword =
    popupRegisterForm.querySelector("#register_password").value;

  const formRegisterData = {
    firstName: registerFirstName,
    lastName: registerLastName,
    email: registerEmail,
    password: registerPassword,
  };

  localStorage.setItem("popupRegisterForm", JSON.stringify(formRegisterData));

  iconProfile.classList.add("header__profile-icon_user");
  iconProfile.textContent = registerFirstName.slice(0, 1) + registerLastName.slice(0, 1)
});

const popupLoginForm = document.querySelector(".popup__form_login");

popupLoginForm.addEventListener("submit", function () {
  const loginEmail = popupLoginForm.querySelector("#login_email").value;
  const loginPassword = popupLoginForm.querySelector("#login_password").value;

  const formLoginData = {
    email: loginEmail,
    password: loginPassword,
  };

  localStorage.setItem("popupLoginForm", JSON.stringify(formLoginData));
});
