const lowerList = 'abcdefghijklmnopqrstuvwxyz';
const numList = '1234567890';
const specialList = `!@#$%^&*()[]{};':",.<>/?`;

var upperAlpha = [];

let userChoices = "";

function toUpper(x) {
 return x.toUpperCase();
}
upperList = lowerList.toUpperCase()


document.getElementById('generate').addEventListener('click', () => {
 let confirmLength = prompt('Enter the desired password length. Minimum of 8 and maximum of 128');

 while (confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
  confirmLength = prompt('Length needs to be a minimum of 8 and a maximum of 128');
  if (confirmLength >= 8 && confirmLength <= 128) {
  }
 }

 let confirmUpper = confirm('Do you want capital letters? Yes = Ok No = Cancel');

 let confirmLower = confirm('Do you want lower case letters? Yes = Ok No = Cancel');

 let confirmNum = confirm('Do you want numbers? Yes = Ok No = Cancel');

 let confirmSpecial = confirm('Do you want special characters? Yes = Ok No = Cancel');

 if (!confirmUpper && !confirmLower && !confirmNum && !confirmSpecial) {
  userChoices = confirm("You must select a criteria!");
 }
 else if (confirmUpper && confirmLower && confirmNum && confirmSpecial) {
  userChoices = lowerList.concat(upperList, specialList, numList);
 }
 else if (confirmUpper && confirmNum && confirmSpecial) {
  userChoices = specialList.concat(upperList, numList);
 }
 else if (confirmLower && confirmNum && confirmSpecial) {
  userChoices = specialList.concat(lowerList, numList);
 }
 else if (confirmUpper && confirmLower && confirmSpecial) {
  userChoices = specialList.concat(upperList, lowerList);
 }
 else if (confirmUpper && confirmLower && confirmNum) {
  userChoices = lowerList.concat(upperList, numList);
 }
 else if (confirmNum && confirmSpecial) {
  userChoices = specialList.concat(numList);
 }
 else if (confirmLower && confirmSpecial) {
  userChoices = specialList.concat(lowerList);
 }
 else if (confirmUpper && confirmSpecial) {
  userChoices = specialList.concat(upperList);
 }
 else if (confirmLower && confirmNum) {
  userChoices = lowerList.concat(numList);
 }
 else if (confirmUpper && confirmLower) {
  userChoices = lowerList.concat(upperList);
 }
 else if (confirmUpper && confirmNum) {
  userChoices = numList.concat(upperList);
 }
 else if (confirmSpecial) {
  userChoices = specialList;
 }
 else if (confirmNum) {
  userChoices = numList;
 }
 else if (confirmLower) {
  userChoices = lowerList;
 }
 else if (confirmUpper) {
  userChoices = upperAlpha.concat(upperList);
 };


 var password = [];


 for (i = 0; i < confirmLength; i++) {
  choices = userChoices[Math.floor(Math.random() * userChoices.length)];
  password.push(choices);
 }

 var ps = password.join("");
 UserInput(ps);
 return ps;


})



function UserInput(ps) {
 document.getElementById("password").textContent = ps;
}

document.getElementById("click", function () {
 ps = generatePassword();
 document.getElementById("password").placeholder = ps;
});