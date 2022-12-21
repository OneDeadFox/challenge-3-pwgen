function generatePassword() {
  
  //f() for opening confirm pop-up
  function confirmAction(popPrompt) {
    let response = confirm(popPrompt);
    return(response);
  }

  //f() for opening a user input pop-up
  function confirmLegth(popPrompt) {
    let userLength = prompt(popPrompt);
    return(userLength);
  }

  //f() for password length
  var passLength = function lengthFunc() {
    let passLength = confirmLegth("please input the desired length for your password between 8 and 128")
    if (passLength < 8 || passLength > 128) {
      alert("Please try again");
      lengthFunc();
    }else{
    return(passLength);
    }
  }

  //f() for random number

  //f() for random letter upper and lowwer case

  //f() for random special characters
  passLength();
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
