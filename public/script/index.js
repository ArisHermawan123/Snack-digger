const IsNavigation = document.querySelector(".container-nav");
const IsWrapperDropdownNav = document.querySelector(".nav-icon-shopping");
const IsWrapperProfileNav = document.querySelector(".con-prof-username");

const form = document.querySelector(".form");
const emailInput = document.querySelector(".form-input-email");
const emailField = document.querySelector(".form-span-error-email");
const passInput = document.querySelector(".form-input-password");
const btn = document.querySelector("span i");
const passField = document.querySelector(".form-span-error-password");

function HandleDropDown() {
  if (IsWrapperDropdownNav.style.display === "flex") {
    IsWrapperDropdownNav.style.display = "none";
  } else {
    IsWrapperDropdownNav.style.display = "flex";
  }
}
function HnadleDropdownProfile() {
  if (IsWrapperProfileNav.style.display === "flex") {
    IsWrapperProfileNav.style.display = "none";
    IsWrapperProfileNav.style.display = "flex";
  } else {
    IsWrapperProfileNav.style.display = "flex";
  }
}

window.onscroll = function () {
  if (window.scrollY > 22) {
    IsNavigation.classList.add("onscroll");
  } else {
    IsNavigation.classList.remove("onscroll");
  }
};

const __isEmail = (email) => {
  const regexExp = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/gi;
  return regexExp.test(email);
};

const ChekEmailInput = () => {
  if (emailInput.value == "") {
    return emailField.classList.add("Invalid-null");
  }
  emailField.classList.remove("Invalid-null");

  try {
    if (!__isEmail(emailInput.value)) {
      return emailField.classList.add("Invalid");
    }
    emailInput.classList.remove("Invalid");
  } catch (error) {
    console.log(error);
  }
};

const __isPassword = (password) => {
  const regexPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  return regexPass.test(password);
};

btn.onclick = function () {
  if (passInput.type === "password") {
    passInput.type = "text";
    btn.classList.add("hide-btn-password");
  } else {
    passInput.type = "password";
    btn.classList.remove("hide-btn-password");
  }

  ChekPasswordInput();
};

const ChekPasswordInput = () => {
  if (passInput.value == "") {
    return passField.classList.add("Invalid-null");
  }
  passField.classList.remove("Invalid-null");

  try {
    if (!__isPassword(passInput.value)) {
      return passField.classList.add("Invalid");
    }
    passField.classList.remove("Invalid");
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  ChekEmailInput();
  ChekPasswordInput();
});
