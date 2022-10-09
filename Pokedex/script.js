// Pokemon array of objects
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

// Required elements
const numberInput = document.getElementById("number-search");
const nameInput = document.getElementById("name-search");
const dynamicUl = document.getElementById("dynamic-ul");

// Event listeners needed
numberInput.addEventListener("keyup", numberEnter);
nameInput.addEventListener("keyup", nameEnter);

// Array that will carry matching results with user's entry
let alertArray = [];

// When a key is clicked in the number search box
function numberEnter(event) {
  // Clear the elements in the dynamic ul
  let child = dynamicUl.lastElementChild;
  while (child) {
    dynamicUl.removeChild(child);
    child = dynamicUl.lastElementChild;
  }
  // Grab user's input
  var userNumber = numberInput.value;
  console.log(event);
  // Clear the array with the previous matching results
  alertArray = [];
  // If the user's entry was not null, call the next method
  if (userNumber != "") {
    filterNumberResults(userNumber);
  }
}

// When a key is clicked in the name search box
function nameEnter(event) {
  // Clear the elements in the dynamic ul
  let child = dynamicUl.lastElementChild;
  while (child) {
    dynamicUl.removeChild(child);
    child = dynamicUl.lastElementChild;
  }
  // Grab user's input
  var userName = nameInput.value;
  console.log(event);
  // Clear the array with the previous matching results
  alertArray = [];
  // If the user's entry was not null, call the next method
  if (userName != "") {
    filterNameResults(userName);
  }
}

// Funtion to filter the names that match with user input and send them to alertArray
function filterNameResults(userName) {
  let userInput = userName.toLowerCase();
  for (let i = 0; i < pokemon.length; i++) {
    let pokemonName = pokemon[i].name.toLowerCase();
    if (pokemonName.includes(userInput)) {
      alertArray.push(pokemon[i]);
    }
  }
  // Call next method
  displayResults();
}

// Funtion to filter the number that match with user input and send them to alertArray
function filterNumberResults(userNumber) {
  let userInput = userNumber;
  for (let i = 0; i < pokemon.length; i++) {
    let pokemonNumber = pokemon[i].id;
    if (pokemonNumber.includes(userInput)) {
      alertArray.push(pokemon[i]);
    }
  }
  // Call next method
  displayResults();
}

// Display the results by dynamically adding the elements into the dynamic-ul in our HTML file
function displayResults() {
  for (let i = 0; i < alertArray.length; i++) {
    // Get the element in our HTML file that has the same ID as the element the user inputted
    let pokemonId = document.getElementById(alertArray[i].id);
    // Clone that element
    let clonePokemonId = pokemonId.cloneNode(true);
    // Remove its ID so that when we add it into the list there won't be elements with the same ID
    clonePokemonId.removeAttribute("id");
    // Add the cloned element in the dynamic-ul
    dynamicUl.appendChild(clonePokemonId);
  }
}
