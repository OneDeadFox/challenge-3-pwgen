function generatePassword() {
  
  //Initalizing Variables
  var pLength = 0;
  var confirmNum = false;
  var confirmUp = false;
  var confirmLow = false;
  var confirmChar = false;
  var options = [confirmNum, confirmUp, confirmLow, confirmChar]

  //f() for opening confirm pop-up
  function confirmAction(popPrompt) {
    let response = confirm(popPrompt);
    return(response);
  }

  //f() for opening a user input pop-up
  function confirmLegth(popPrompt) {
    userLength = prompt(popPrompt);
    return(userLength);
  }

  //f() for password length
  var passLength = function lengthFunc() {
    pLength = confirmLegth("please input the desired length for your password between 8 and 128")
    if (pLength < 8 || passLength > 128) {
      alert("Please try again");
      lengthFunc();
    }else{
    return(pLength);
    }
  }

  //f() for random number
  function randomNum(range) {
    let num = math.floor(math.random() * range);

    return (num);
  }

  //f() for random letter upper and lowwer case
  function randomLet() {
    let letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
    let letter = letters[randomNum(letters.length)];

    return(letter);
  }
  //f() for random special characters
  function specialChar() {
    let chars = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~","\"","\'","\`",];
    let char = chars[randomNum(chars.length)];

    return(char);
  }
  
  //determine length
  passLength();
  
  //loop until at least 1 option is choosen
  while(!confirmNum || !confirmUp || !confirmLow || !confirmChar){
  alert("Please select okay for at least 1 of the following prompts.")
  confirmNum = confirmAction("Would you like your password to contain numbers?")
  confirmUp = confirmAction("Would you like your password to contain capital letters?")
  confirmLow = confirmAction("Would you like your password to contain lowercase letters?")
  confirmChar = confirmAction("Would you like your password to contain special characters?")
  }

  //Remove unchoosen options
  if (!confirmNum){
    options.splice(indexOf(confirmNum))
  } else if (!confirmUp){
    options.splice(indexOf(confirmUp))
  } else if (!confirmLow){
    options.splice(indexOf(confirmLow))
  } else if (!confirmChar){
    options.splice(indexOf(confirmChar))
  }

  for(var i = 0; i < pLength; i++) {

  }
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
