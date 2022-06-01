// CODE HERE
const accounts = {
  admin: "password",
};

//SELECTORS/ELEMENTS
const login = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const forgotPassword = document.getElementById("forgotPassword");

//FUNCTIONS
function checkInput() {
  let inputUsername = username.value;
  let inputPassword = password.value;

  if (accounts[inputUsername] === inputPassword) {
    alert("your in!");
    window.location.replace("feed.html");
  } else {
    alert("wrong pass bro");
  }
}

//accomodate pressing enter;
function checkKeypress(e) {
  if (e.key === 'Enter') {
    checkInput();
  }
}

//EVENT LISTENERS
login.addEventListener("click", checkInput);
forgotPassword.addEventListener("click", () => alert('username: admin' + '\n' + 'password: "password"'));
password.addEventListener("keypress", checkKeypress);
username.addEventListener("keypress", checkKeypress);

