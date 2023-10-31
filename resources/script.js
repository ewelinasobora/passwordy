// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function returning boolean value for lowercase character option,
// according to user's input
function getLowerCasedChars() {
  var lowercased = confirm("Would you like lowercased characters?")

  return lowercased;
}

function getUpperCasedChars() {
  var uppercased = confirm("Would you like uppercased characters?");

  return uppercased;
}

function getNumericChars() {
  var numeric = confirm("Would you like numeric characters?");

  return numeric;
}

function getSpecialChars() {
  var numeric = confirm("Would you like special characters?");

  return numeric;
}

// Function to prompt user for password options
function getPasswordOptions() {
  var characterOptions = [];

  var confirmedLowerCasedChars = getLowerCasedChars();

  if (confirmedLowerCasedChars) {
    characterOptions.push(...lowerCasedCharacters);
  }

  var confirmedUpperCasedChars = getUpperCasedChars();

  if (confirmedUpperCasedChars) {
    characterOptions.push(...upperCasedCharacters);
  }

  var confirmedNumericChars = getNumericChars();

  if (confirmedNumericChars) {
    characterOptions.push(...numericCharacters);
  }

  var confirmedSpecialChars = getSpecialChars();

  if (confirmedSpecialChars) {
    characterOptions.push(...specialCharacters);
  }

  console.log(characterOptions);
  return characterOptions;
}

// Function for returning valid password length
function getPasswordLength() {
  var getLength = prompt("Enter password length: ");
  return validatePasswordLength(getLength);
}

// Function for validating password's length
function validatePasswordLength(input) {
  var number = parseInt(input)
  var valid = false;

  while (valid === false) {
    if (8 <= number && number <= 128) {
      valid = true;
    } else {
      number = prompt("Invalid password's length. Re-enter password's length: ")
    }
  }
  return number;
}

// Function for getting a random element from an array
function getRandom(passwordLength, options) {
  let characterList = options;
  let password_chars = [];

  for (let i = 0; i <= passwordLength; i++) {
    var getRandomIndex = Math.floor(Math.random() * characterList.length);

    var item = characterList[getRandomIndex];
    password_chars.push(...item);
  }

  return password_chars;
}

// Function to generate password with user input
function generatePassword(randomizedPassword) {
  const password = randomizedPassword.join("");
  alert(`Your generated password is: ${password}`)
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password_length = getPasswordLength();
  var options = getPasswordOptions();
  var random = getRandom(password_length, options);
  var password = generatePassword(random);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword());