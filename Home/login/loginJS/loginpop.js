const loginButton = document.getElementById("loginButton");
const loginPlaceHolder = document.getElementById("loginPlaceHolder");
const dropdown = document.getElementById("loginDrop");
const loginPopup = document.getElementById("loginPopup");
const overlay = document.getElementById("overlay");
const loginForm = document.getElementById("loginForm");
loginButton.addEventListener("click", loginpop);
var loggedIn = localStorage.getItem('loggedIn');

function loginpop() {
  {if(localStorage.getItem('loggedIn')=="false"){
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
console.log(loggedIn);
loginPlaceHolder.addEventListener('mouseover', function() {
  // Check if the user is logged in
  console.log(loggedIn);
  if (loggedIn==null||loggedIn=="false") {
    
    dropdown.id = 'dropdownN';
  }
});

// Event listener for mouseout (hover out) on the button
loginPlaceHolder.addEventListener('mouseout', function() {
    dropdown.id = 'loginDrop';
  
});