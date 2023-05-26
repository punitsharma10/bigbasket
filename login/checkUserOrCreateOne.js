// Check if the user exists in local storage
localStorage.setItem("otp","88888")
function checkUserExists(userInput) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user. userId == userInput );
    console.log(existingUser.userDetails.Name)
    if(existingUser){
      const UserName = existingUser.userDetails.Name
    }
    return existingUser;
  }
  
  // Perform login or create account
  function performLoginOrSignUp(userInput) {
    const enteredOTP = document.getElementById("otp").value
      const savedOTP = localStorage.getItem('otp'); 

     if (enteredOTP === savedOTP) {
        console.log('correct OTP!');
        VerificationPage.style.display = "none";
        overlay.style.display = "none";
        
      } else {
        console.log('Invalid OTP. Login failed.');
        alert('Invalid OTP. Login failed.');
      }

    const existingUser = checkUserExists(userInput);
    if (existingUser) {
      console.log(existingUser.userDetails.Name)
      document.getElementById("loginButton").innerText=existingUser.userDetails.Name
    } else {
      const newUser = {
        email: '',
        number: "",
        Name: "",
        Address: '', 
      };
       VerificationPage.style.display = "none";
       const DetailsPopup = document.getElementById("DetailsPopup");
       DetailsPopup.style.display = "block";
        document.querySelector("#DetailsForm").addEventListener("submit",function(){
        storeDetails(newUser)
       })
      
    }
  }
 var userInput="";
  // Event handler for the submit button
  function onSubmitButtonClicked() {
    userInput = document.getElementById("userID").value;
    const loginPopup = document.getElementById("loginPopup");
    const VerificationPage = document.getElementById("VerificationPopup");
    loginPopup.style.display = "none";
      VerificationPage.style.display = "block";
    
  }
  document.getElementById("verifyOTP").addEventListener('click',function(){
    event.preventDefault();
   performLoginOrSignUp(userInput);
  })

  document.getElementById('submitButton').addEventListener('click', onSubmitButtonClicked);
  
function storeDetails(newUser){
  event.preventDefault();
newUser.Name=document.getElementById("UserName").value;
newUser.Address=document.getElementById("UserAddress").value;
newUser.Number=document.getElementById("UserNumber").value;
DetailsPopup.style.display = "none";
document.getElementById("loginButton").innerText=newUser.Name


if (userInput.includes('@')) {
  newUser.email = userInput;
} else {
  newUser.number = userInput;
}

 const User={
  userId : userInput,
  userDetails : newUser
 };
const users = JSON.parse(localStorage.getItem('users')) || [];
users.push(User);
localStorage.setItem('users', JSON.stringify(users));
console.log('Account created successfully!');
}
