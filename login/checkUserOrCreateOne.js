// Check if the user exists in local storage
localStorage.setItem("otp","88888")
function checkUserExists(userInput) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user. userId == userInput );
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
      document.getElementById("loginButton").innerText=existingUser.Name
    } else {
      const newUser = {
        email: '',
        number: "",
        Name: "",
        Address: '', 
      };
       const User={
        userId : userInput,
        userDetails : newUser
       };

       VerificationPage.style.display = "none";
       const DetailsPopup = document.getElementById("DetailsPopup");
       DetailsPopup.style.display = "block";
      if (userInput.includes('@')) {
        newUser.email = userInput;
      } else {
        newUser.number = userInput;
      }
  
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(User);
      localStorage.setItem('users', JSON.stringify(users));
  
      console.log('Account created successfully!');
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
  