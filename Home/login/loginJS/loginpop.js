const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const overlay = document.getElementById("overlay");
const loginForm = document.getElementById("loginForm");
loginButton.addEventListener("click", loginpop);
var loggedIn = localStorage.getItem('loggedIn');

function loginpop() {
  {if(localStorage.getItem('loggedIn')===null){
    loginPopup.style.display = "block";
    overlay.style.display = "block";
  }
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
  console.log("Clicked")
  LoginPage.style.display = "none";
  VerificationPage.style.display = "block";
});
