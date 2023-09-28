// Check if I have completed session 2 work
let assignmentDone = false;

// function - admin

function adminLogin() {
  console.log("____________________");
  console.log(
    "This is admin screen, please write some more code for interactivity"
  );
  console.log("Thank you for logging in, session finished.");
  console.log("____________________");
}

// function with a return - regular user

function userLogin(password) {
  alert("Thank you for choosing our app 👩‍💻");
  alert("Lets check if your password matches the secret passcode");

  const status = password === "kiwi";

  if (status === true) {
    alert("You have the right passcode!");
    return true;
  } else {
    alert("Try again 😔 ");
    return false;
  }
}

// ask for user input
const username = prompt("What is your username?");
// check what I have received
console.log(username);

const password = prompt("What is your password?");
// check what I have received
console.log(password);

// if.. else to make decision with logical or comparision operators
if (username === "admin" && password === "password") {
  alert("Welcome Admin");
  adminLogin();
} else {
  alert("Welcome " + username);
  userLogin(password);
}

// reasign let variable value
assignmentDone = true;
alert("You have finished the assignment!");

// Given more time, I would investigate switch case and make more complex conditional logic