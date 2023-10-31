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

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = getPasswordLength()

  return passwordLength;
}

// Function for getting valid password length
function getPasswordLength() {
  var getLength = prompt("Enter password length: ");
  return validatePasswordLength(parseInt(getLength));
}

// Function for password length validation
function validatePasswordLength(input) {
  var valid = false;

  while (valid === false) {
    if (8 <= input && input <= 128) {
      valid = true;
    } else {
      input = prompt("Invalid password's length. Re-enter password's length: ")
    }
  }
  return input;
}

// Function for getting a random element from an array
function getRandom(passwordLength) {
  let password_chars = [];

  for (let i = 0; i < passwordLength; i++) {
    var getRandomIndex = Math.floor(Math.random() * lowerCasedCharacters.length);

    var item = lowerCasedCharacters[getRandomIndex];
    password_chars += item;
  }

  return password_chars;
}

// Function to generate password with user input
function generatePassword(password_options) {
  return password_options.toString();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var options = getPasswordOptions();

  // var password_length = getPasswordLength();
  // var validPasswordLength = validatePasswordLength(password_length);
  var random = getRandom(options);
  var password = generatePassword(random);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword());