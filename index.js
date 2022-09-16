//selectors
var password = document.getElementById("password");

const createBtn = document.querySelector(".createBtn");
const copyBtn = document.querySelector(".copy-btn");

function createPassword() {
  //   console.log("Create button Clicked");
  var pass = "";
  var string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  for (let i = 1; i < 8; i++) {
    var char = Math.floor(Math.random() * string.length + 1);
    pass += string.charAt(char);
    // console.log(char);
    // console.log(pass);
  }
  //   console.log(pass);
  document.getElementById("password").value = pass;
}
function copyText() {
  console.log("Create button Clicked");
}

function copyText() {
  var copyTxt = document.getElementById("password");
  navigator.clipboard.writeText(copyTxt.value);
  alert("Password Copied ");
  //   copyTxt.execCommand("copy");
  //   console.log(copyTxt.value);
}
