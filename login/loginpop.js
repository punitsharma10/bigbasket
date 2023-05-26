const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const overlay = document.getElementById("overlay");
const loginForm = document.getElementById("loginForm");
loginButton.addEventListener("click", loginpop);

function loginpop() {
  {
    loginPopup.style.display = "block";
    overlay.style.display = "block";
  }
}
overlay.addEventListener("click", function () {
  loginPopup.style.display = "none";
  overlay.style.display = "none";
});

// on clicking submit
const LoginPage = document.getElementById("loginPopup");
const VerificationPage = document.getElementById("VerificationPopup");
document.getElementById("submitButton").addEventListener("submit", function () {
  event.preventDefault();
  LoginPage.style.display = "none";
  VerificationPage.style.display = "block";
});
