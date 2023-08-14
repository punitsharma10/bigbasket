// Check if the user exists in local storage
localStorage.setItem("otp", "88888");
function checkUserExists(userInput) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find((user) => user.userId == userInput);
  return existingUser;
}

if (localStorage.getItem("UserName") !== null) {
  document.getElementById("loginButton").innerHTML =
    localStorage.getItem("UserName");
}

// Perform login or create account
function performLoginOrSignUp(userInput) {
  const enteredOTP = document.getElementById("otp").value;
  const savedOTP = "88888";

  if (enteredOTP == savedOTP) {
    console.log("correct OTP!");
    localStorage.setItem("loggedIn", "true");
    VerificationPage.style.display = "none";
    overlay.style.display = "none";

    const existingUser = checkUserExists(userInput);
    if (existingUser) {
      localStorage.setItem("UserName", existingUser.userDetails.Name);
      localStorage.setItem("loggedIn", "true");
      location.reload();
    } else {
      const newUser = {
        email: "",
        number: "",
        Name: "",
        Address: "",
      };

      if (userInput.includes("@")) {
        newUser.email = userInput;
      } else {
        newUser.number = userInput;
      }

      VerificationPage.style.display = "none";
      const DetailsPopup = document.getElementById("DetailsPopup");
      DetailsPopup.style.display = "block";
      overlay.style.display = "block";
      document
        .querySelector("#DetailsForm")
        .addEventListener("submit", function () {
          storeDetails(newUser);
        });
    }
  } else {
    console.log("Invalid OTP. Login failed.");
    alert("Invalid OTP. Login failed.");
  }
}
var userInput = "";
// Event handler for the submit button
function onSubmitButtonClicked() {
  userInput = document.getElementById("userID").value;
  const loginPopup = document.getElementById("loginPopup");
  const VerificationPage = document.getElementById("VerificationPopup");
  loginPopup.style.display = "none";
  VerificationPage.style.display = "block";
}
document.getElementById("verifyOTP").addEventListener("click", function () {
  event.preventDefault();
  performLoginOrSignUp(userInput);
});

document
  .getElementById("submitButton")
  .addEventListener("click", onSubmitButtonClicked);

function storeDetails(newUser) {
  event.preventDefault();
  newUser.Name = document.getElementById("UserName").value;
  newUser.Address = document.getElementById("UserAddress").value;
  newUser.Email = document.getElementById("UserEmail").value;
  DetailsPopup.style.display = "none";
  overlay.style.display = "none";
  localStorage.setItem("UserName", newUser.Name);
  localStorage.setItem("loggedIn", "true");
  location.reload();
  const User = {
    userId: userInput,
    userDetails: newUser,
  };
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(User);
  localStorage.setItem("users", JSON.stringify(users));
  console.log("Account created successfully!");
}
