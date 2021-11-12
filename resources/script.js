const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const specialCharacters = '!@#$%^&*()_+}{[]/.,<>?\\|~`:\";\'';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let userChoices = "";

document.getElementById('generate').addEventListener('click',()=> {
 let passwordLength = prompt('Pick a password length with minimum of 8, maximum of 128 characters');
 
 while  (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
   confirmLength = prompt('Length needs to be a minimum of 8 and a maximum of 128');
  }
 


let confirmUpper = confirm('Do you want Upper cases? Yes = Ok No = Cancel');

let confirmLower = confirm('Do you want lower cases? Yes = Ok No = Cancel');

let confirmNum = confirm('Do you want numbers? Yes = Ok No = Cancel');

let confirmSpecial = confirm('Do you want special characters? Yes = Ok No = Cancel');


if (
 confirmUpper === false &&
 confirmLower === false &&
 confirmNum === false &&
 confirmSpecial === false
)
{
 userChoices= confirm ('You must select at least one categories')  
}
else if (confirmUpper && confirmLower && confirmNum && confirmSpecial){
  userChoices = lowerCase.concat(upperCase,numbers,specialCharacters);
}
else if (confirmSpecial){
 userChoices = specialCharacters.concat(lowerCase, numbers, upperCase);
}
 else if (confirmNum){
 userChoices = numbers.concat(lowerCase, specialCharacters, upperCase);
 }
 else if (confirmLower){
 userChoices = lowerCase.concat(specialCharacters, numbers, upperCase);
 }
 else if (confirmUpper){
 userChoices = upperCase.concat(specialCharacters, numbers, lowerCase);
 };


 let rdPassword = [];

 for (let i = 0; i < passwordLength; i++) {
  choices = userChoices[Math.floor(Math.random() * userChoices.length)];
  rdPassword.push(choices);
 }
 let psswrd = rdPassword.join("");
 UserInput(psswrd);
 return psswrd;
})


function UserInput(psswrd) {
document.getElementById("password").textContent = psswrd;
}

document.getElementById("click", function () {
 psswrd = generatePassword();
 document.getElementById("password").placeholder = psswrd;
});