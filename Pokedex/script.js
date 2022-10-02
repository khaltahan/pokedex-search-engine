// JavaScript HTML DOM Elements needed for code
const numberInput = document.getElementById("number-search");
const nameInput = document.getElementById("name-search");
const numberSearchIconE = document.getElementById("number-search-icon");
const nameSearchIconE = document.getElementById("name-search-icon");
let dynamicUl = document.getElementById("dynamic-ul");

// Event listeners to listen to key presses and mouse clicks, and call other functions
numberInput.addEventListener("keyup", numberEnter);
nameInput.addEventListener("keyup", nameEnter);

// This array will be used to hold the results that match the user's entry
let alertArray = [];

// Function called after every user numper input
function numberEnter(event) {
  // Clear all child elements of dynamic ul
  let child = dynamicUl.lastElementChild;
  while (child) {
    dynamicUl.removeChild(child);
    child = dynamicUl.lastElementChild;
  }
  // Get users input
  var userNumber = numberInput.value;
  // Clear array
  alertArray = [];
  filterNumberResults(userNumber);
}

// Function to determine if user inputted the Enter key
function nameEnter(event) {
  // Get users input
  var userName = nameInput.value;
  alert(userName);
  filterNameResults(userName);
}

// Function to return true if the parameter only contains letters
// function lettersOnly(str) {
//   return /^[a-zA-Z]+$/.test(str);
// }

// Array of objects to carry the name, id, and attribute of each pokemon
let pokemon = [
  {
    name: "Bulbasaur",
    id: "001",
    attributes: "Grass and Poison",
  },
  {
    name: "Ivysaur",
    id: "002",
    attributes: "Grass and Poison",
  },
  {
    name: "Venusaur",
    id: "003",
    attributes: "Grass and Poison",
  },
  {
    name: "Charmender",
    id: "004",
    attributes: "Fire",
  },
  {
    name: "Charmeleon",
    id: "005",
    attributes: "Fire",
  },
  {
    name: "Charizard",
    id: "006",
    attributes: "Fire and Flying",
  },
  {
    name: "Squirtle",
    id: "007",
    attributes: "Water",
  },
  {
    name: "Wartotle",
    id: "008",
    attributes: "Water",
  },
  {
    name: "Blastoise",
    id: "009",
    attributes: "Water",
  },
  {
    name: "Caterpie",
    id: "010",
    attributes: "Bug",
  },
  {
    name: "Metapod",
    id: "011",
    attributes: "Bug",
  },
  {
    name: "Butterfree",
    id: "012",
    attributes: "Bug and Flying",
  },
  {
    name: "Weedle",
    id: "013",
    attributes: "Bug and Poison",
  },
  {
    name: "Kakuna",
    id: "014",
    attributes: "Bug and Poison",
  },
  {
    name: "Beedrill",
    id: "015",
    attributes: "Bug and Poison",
  },
  {
    name: "Pidhey",
    id: "016",
    attributes: "Normal and Flying",
  },
  {
    name: "Pidgeotto",
    id: "017",
    attributes: "Normal and Flying",
  },
  {
    name: "Pidgeot",
    id: "018",
    attributes: "Normal and Flying",
  },
  {
    name: "Rattata",
    id: "019",
    attributes: "Normal",
  },
  {
    name: "Raticate",
    id: "020",
    attributes: "Normal",
  },
];

// Function to filter through the pokemon names and find matches
function filterNameResults(userName) {
  // Convert user-input to lowercase
  let userInput = userName.toLowerCase();
  // For-loop to itterate through pokemon array
  for (let i = 0; i < pokemon.length; i++) {
    // Convert pokemon name to lowercase
    let pokemonName = pokemon[i].name.toLowerCase();
    // If pokemon name consists of user input, add the pokemon object to alertArray
    if (pokemonName.includes(userInput)) {
      alertArray.push(pokemon[i]);
    }
  }
  // Call displayResults()
  displayResults();
}

// Function to filter through the pokemon numbers and find matches
function filterNumberResults(userNumber) {
  let userInput = userNumber;
  // For-loop to itterate through pokemon array
  for (let i = 0; i < pokemon.length; i++) {
    let pokemonNumber = pokemon[i].id;
    // If pokemon name consists of user input, add the pokemon object to alertArray
    if (pokemonNumber.includes(userInput)) {
      alertArray.push(pokemon[i]);
    }
  }
  // Call displayResults()
  displayResults();
}

function displayResults() {
  for (let i = 0; i < alertArray.length; i++) {
    let pokemonId = document.getElementById(alertArray[i].id);
    let clonePokemonId = pokemonId.cloneNode(true);
    clonePokemonId.removeAttribute("id");
    dynamicUl.appendChild(clonePokemonId);
  }
}
