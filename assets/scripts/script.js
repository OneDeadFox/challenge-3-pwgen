function generatePassword() {
  
  //Initalizing Variables
  var pLength = 0;
  var objNum = {
    objName: "confirmNum",
    objSelected: false,
  };
  var objUp = {
    objName: "confirmUp",
    objSelected: false,
  };
  var objLow = {
    objName: "confirmLow",
    objSelected: false,
  };
  var objChar = {
    objName: "confirmChar",
    objSelected: false,
  };
  var options = [];
  var passwordActual = "";


  // //f() for opening confirm pop-up
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
  
 // Loop until at least 1 option is choosen
  while(objNum.objSelected !== true && objUp.objSelected !== true && objLow.objSelected !== true && objChar.objSelected !== true){
  alert("Please select okay for at least 1 of the following prompts.");
  objNum.objSelected = confirmAction("Your password will contain numbers?");
  objUp.objSelected = confirmAction("Your password will contain capital letters?");
  objLow.objSelected = confirmAction("Your password will contain lowercase letters?");
  objChar.objSelected = confirmAction("Your password will contain special characters?");

  options = [objNum, objUp, objLow, objChar];
  }

  //Remove unchoosen options
  if (options[options.indexOf(objNum)].objSelected !== true){
    options.splice(options.indexOf(objNum), 1);
  }
  if (options[options.indexOf(objUp)].objSelected !== true){
    options.splice(options.indexOf(objUp), 1);
  }
  if (options[options.indexOf(objLow)].objSelected !== true){
    options.splice(options.indexOf(objLow), 1);
  }
  if (options[options.indexOf(objChar)].objSelected !== true){
    options.splice(options.indexOf(objChar), 1);
  }
  
  //Loop until a password of choosen length has been produced
  for(var i = 0; i < pLength; i++) {

    var iteration = options[randomNum(options.length)].objName;
    var passChar;

    if (iteration === "confirmNum" && objNum.objSelected === true){
      passChar = randomNum(10);
    } else if (iteration === "confirmUp" && objUp.objSelected === true){
      passChar = randomLet().toUpperCase();
    } else if (iteration === "confirmLow" && objLow.objSelected === true){
      passChar = randomLet();
    } else if (iteration === "confirmChar" && objChar.objSelected === true){
      passChar = randomChar();
    } else {
      console.log("error!!!")
    }

    passwordActual += passChar;
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
