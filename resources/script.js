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

// Function for returning valid password length
function getPasswordLength() {
  const getLength = prompt("Enter password length: ");

  return validatePasswordLength(getLength);
}

// Function for validating password's length
function validatePasswordLength(input) {
  let number = parseInt(input)
  let valid = false;

  while (valid === false) {
    if (8 <= number && number <= 128) {
      valid = true;
    } else {
      number = prompt("Invalid password's length. Re-enter number between 8 and 128: ")
    }
  }
  return number;
}

// Function to prompt user for password options
function getPasswordOptions() {
  let characterOptions = [];
  applyLowerCasedCharOption(characterOptions);
  applyUpperCasedCharOption(characterOptions);
  applyNumericCharOption(characterOptions);
  applySpecialCharOption(characterOptions);

  return characterOptions;
}

// Function for getting a random element from an array
function getRandom(passwordLength, options) {
  const characterList = options;
  let password_chars = [];

  for (let i = 0; i <= passwordLength; i++) {
    const getRandomIndex = Math.floor(Math.random() * characterList.length);

    const item = characterList[getRandomIndex];
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

// Function returning boolean value for lowercased characters option,
// depending on user's input
function confirmLowerCasedChars() {
  const lowercased = confirm("Would you like lowercased characters?")

  return lowercased;
}

// Function returning boolean value for uppercased characters option,
// depending on user's input
function confirmUpperCasedChars() {
  const uppercased = confirm("Would you like uppercased characters?");

  return uppercased;
}

// Function returning boolean value for numeric characters option,
// depending on user's input
function confirmNumericChars() {
  const numeric = confirm("Would you like numeric characters?");

  return numeric;
}

// Function returning boolean value for special characters option,
// depending on user's input
function confirmSpecialChars() {
  const special = confirm("Would you like special characters?");

  return special;
}

// Function for applying lower cased characters
function applyLowerCasedCharOption(options) {
  const confirmedLowerCasedChars = confirmLowerCasedChars();

  if (confirmedLowerCasedChars) {
    options.push(...lowerCasedCharacters);
  }
}

// Function for applying upper cased characters
function applyUpperCasedCharOption(options) {
  const confirmedUpperCasedChars = confirmUpperCasedChars();

  if (confirmedUpperCasedChars) {
    options.push(...upperCasedCharacters);
  }
}

// Function for applying numeric characters
function applyNumericCharOption(options) {
  const confirmedNumericChars = confirmNumericChars();

  if (confirmedNumericChars) {
    options.push(...numericCharacters);
  }
}

// Function for applying special characters
function applySpecialCharOption(options) {
  const confirmedSpecialChars = confirmSpecialChars();

  if (confirmedSpecialChars) {
    options.push(...specialCharacters);
  }
}

// Get references to the #generate element
let generateBtn = document.getElementById('generate');

// Write password to the #password input
function writePassword() {
  const password_length = getPasswordLength();
  const options = getPasswordOptions();
  const random = getRandom(password_length, options);
  const password = generatePassword(random);
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);