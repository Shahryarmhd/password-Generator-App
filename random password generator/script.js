const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specialCase = "!@#$%^&*()_+-={}[]|:;";
const numCase = "0123456789";

const allChars = upperCase + lowerCase + specialCase + numCase;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += specialCase[Math.floor(Math.random() * specialCase.length)];
  password += numCase[Math.floor(Math.random() * numCase.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
