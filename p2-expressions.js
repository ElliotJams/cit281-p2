/*
    CIT 281 Project 2
    Name: Elliot James
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// Returns a random lowercase letter
const getRandomLetter = () => {
  return alphabet[getRandomInteger(0, 26)];
}

// Returns a string of random lowercase letters
const getRandomString = (minLength, maxLength) => {
  let result = "";
  for (let i = 0; i < getRandomInteger(minLength, maxLength+1); i++) {
    result += getRandomLetter();
  }
  return result;
}

// Returns inputted string sorted in alphabetical order
const getSortedString = (string) => {
  return ((string.split("")).sort()).join("");
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

console.log(getSortedString(getRandomString(10, 20)));