const popupRegisterForm = document.querySelector(".popup__form_register");

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
});

const popupLoginForm = document.querySelector(".popup__form_login");

popupLoginForm.addEventListener("submit", function () {
  const loginEmail = popupLoginForm.querySelector("#login_email").value;
  const loginPassword = popupLoginForm.querySelector("#login_password").value;

  const formLoginData = {
    email: loginEmail,
    password: loginPassword
  };

  localStorage.setItem("popupLoginForm", JSON.stringify(formLoginData));
});
