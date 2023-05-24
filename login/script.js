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

const LoginEmail = document.getElementById("LoginEmail");
var UserID = document.getElementById("userID");

LoginEmail.addEventListener("click", function () {
  event.preventDefault();
 // console.log(UserID.placeholder)
  if (UserID.placeholder =="Enter Mobile Number(10-Digits)") {
    UserID.type = "email";
    UserID.placeholder = "Enter Your Email";
    
  }else{
    UserID.type = "Number";
    UserID.placeholder = "Enter Mobile Number(10-Digits)";
    
  }
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
});
