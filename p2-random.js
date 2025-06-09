/*
    CIT 281 Project 2
    Name: Elliot James
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Returns a random lowercase letter
function getRandomLetter() {
  return alphabet[getRandomInteger(0, 26)];
}

// Returns a string of random lowercase letters
function getRandomString(minLength, maxLength) {
  let result = "";
  for (let i = 0; i < getRandomInteger(minLength, maxLength+1); i++) {
    result += getRandomLetter();
  }
  return result;
}

// Returns inputted string sorted in alphabetical order
function getSortedString(string) {
  return ((string.split("")).sort()).join("");
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

console.log(getSortedString(getRandomString(10, 20)));