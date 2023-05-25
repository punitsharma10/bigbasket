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
