// JavaScript HTML DOM Elements needed for code
const numberInput = document.getElementById("number-search");
const nameInput = document.getElementById("name-search");
const numberSearchIconE = document.getElementById("number-search-icon");
const nameSearchIconE = document.getElementById("name-search-icon");

// Event listeners to listen to key presses and mouse clicks, and call other functions
numberInput.addEventListener("keydown", numberEnter);
nameInput.addEventListener("keydown", nameEnter);
numberSearchIconE.addEventListener("click", numberSearchIcon);
nameSearchIconE.addEventListener("click", nameSearchIcon);

// Function to determine if user inputted the Enter key
function numberEnter(event) {
  if (event.key === "Enter") {
    // Get users input
    var userNumber = numberInput.value;
    // Alert user uf input is unvalid
    if (userNumber < 1 || userNumber > 20) {
      alert(
        "Invalid Search! Please input a number that is greater than 1 and smaller than 20."
      );
    }
  }
}

// Function to determine if user inputted the Enter key
function nameEnter(event) {
  if (event.key === "Enter") {
    // Get users input
    var userName = nameInput.value;
    // Alert user uf input is anvalid
    if (!lettersOnly(userName)) {
      alert("Invalid Search! Only inputs from A-Z or a-z are allowed");
    }
  }
}

// Function to execute when user clicks on search icon
function numberSearchIcon() {
  // Alert user uf input is unvalid
  if (userNumber < 1 || userNumber > 20) {
    alert(
      "Invalid Search! Please input a number that is greater than 1 and smaller than 20."
    );
  }
}

// Function to execute when user clicks on search icon
function nameSearchIcon() {
  // Alert user uf input is anvalid
  if (!lettersOnly(userName)) {
    alert("Invalid Search! Only inputs from A-Z or a-z are allowed");
  }
}

// Function to return true if the parameter only contains letters
function lettersOnly(str) {
  return /^[a-zA-Z]+$/.test(str);
}
