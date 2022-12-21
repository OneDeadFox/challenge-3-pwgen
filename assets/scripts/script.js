function generatePassword() {
  
  //Initalizing Variables
  var pLength = 0;
  var objNum = {
    objName: confirmNum,
    objSelected: false,
  };
  var objUp = {
    objName: confirmUp,
    objSelected: false,
  };
  var objLow = {
    objName: confirmLow,
    objSelected: false,
  };
  var objChar = {
    objName: confirmChar,
    objSelected: false,
  };
  var options = [];
  // var options = [1,2,3,4,5];
  var passwordActual = "";


  // //f() for opening confirm pop-up
  function confirmAction(popPrompt) {
    let response = confirm(popPrompt);
    console.log(response);
    return(response);
  }

  //f() for opening a user input pop-up
  function confirmLegth(popPrompt) {
    userLength = prompt(popPrompt);
    console.log(userLength);
    return(userLength);
  }

  //f() for password length
  var passLength = function lengthFunc() {
    pLength = confirmLegth("please input the desired length for your password between 8 and 128")
    if (pLength < 8 || passLength > 128) {
      alert("Please try again");
      lengthFunc();
    } else if(isNaN(pLength)) {
      alert("Please try again");
      lengthFunc();
    } else {
    return(pLength);
    }
  }

  //f() for random number
  function randomNum(range) {
    let num = Math.floor(Math.random() * range);
    toString(num);

    return (num);
  }

  //f() for random letter upper and lowwer case
  function randomLet() {
    let letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
    let letter = letters[randomNum(letters.length)];

    return(letter);
  }
  
  //f() for random special characters
  function randomChar() {
    let chars = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~","\"","\'","\`",];
    let char = chars[randomNum(chars.length)];

    return(char);
  }

  //Determine length
  passLength();
  console.log(pLength);
  
 // Loop until at least 1 option is choosen
 // Change the confirm vars to an array of objects with properties of name and value.
  while(confirmNum !== true && confirmUp !== true && confirmLow !== true && confirmChar !== true){
  alert("Please select okay for at least 1 of the following prompts.");
  confirmNum = confirmAction("Your password will contain numbers?");
  confirmUp = confirmAction("Your password will contain capital letters?");
  confirmLow = confirmAction("Your password wil contain lowercase letters?");
  confirmChar = confirmAction("Your password will contain special characters?");

  options = [confirmNum, confirmUp, confirmLow, confirmChar];
  }

  //Remove unchoosen options
  console.log(options);
  if (options[options.indexOf(confirmNum)] !== true){
    options.splice(options.indexOf(confirmNum), 1);
    console.log(options);
    console.log("");
  }
  if (options[options.indexOf(confirmUp)] !== true){
    options.splice(options.indexOf(confirmUp), 1);
    console.log(options);
    console.log("");
  }
  if (options[options.indexOf(confirmLow)] !== true){
    options.splice(options.indexOf(confirmLow), 1);
    console.log(options);
    console.log("");
  }
  if (options[options.indexOf(confirmChar)] !== true){
    options.splice(options.indexOf(confirmChar), 1);
    console.log(options);
    console.log("");
  }
  
  console.log(options);
  console.log("");
  
  //Loop until a password of choosen length has been produced
  for(var i = 0; i < pLength; i++) {

    var iteration = randomNum(options.length)
    var passChar;
    
    console.log(iteration);

    if (iteration === confirmNum){
      passChar = randomNum(10);
    } else if (iteration === confirmUp){
      passChar = randomLet();
    } else if (iteration === confirmLow){
      passChar = randomLet();
    } else if (iteration === confirmChar){
      passChar = randomChar();
    } else {
      console.log("error!!!")
    }
    console.log(iteration);

    passwordActual += passChar;
    console.log(passwordActual);
  }
  
  return(passwordActual);
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
