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
function lowercaseCharacter() {
  var lowercase = confirm("Would you like a lowercase character?")

  return lowercase;
}

// Function to prompt user for password options
function getPasswordOptions() {
  var character_list = [];
  var lowercaseChars = lowercaseCharacter();

  if (lowercaseChars) {
    character_list.push(...lowerCasedCharacters);
  }

  return character_list;
}

// Function for returning valid password length
function getPasswordLength() {
  var getLength = prompt("Enter password length: ");
  return validatePasswordLength(parseInt(getLength));
}

// Function for validating password's length
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