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

const numberInput = document.getElementById("number-search");
const nameInput = document.getElementById("name-search");
const dynamicUl = document.getElementById("dynamic-ul");
numberInput.addEventListener("keyup", numberEnter);
nameInput.addEventListener("keyup", nameEnter);
let alertArray = [];

function numberEnter(event) {
  let child = dynamicUl.lastElementChild;
  while (child) {
    dynamicUl.removeChild(child);
    child = dynamicUl.lastElementChild;
  }
  var userNumber = numberInput.value;
  console.log(event);
  alertArray = [];
  if (userNumber != "") {
    filterNumberResults(userNumber);
  }
}

function nameEnter(event) {
  let child = dynamicUl.lastElementChild;
  while (child) {
    dynamicUl.removeChild(child);
    child = dynamicUl.lastElementChild;
  }
  var userName = nameInput.value;
  console.log(event);
  alertArray = [];
  if (userName != "") {
    filterNameResults(userName);
  }
}

function filterNameResults(userName) {
  let userInput = userName.toLowerCase();
  for (let i = 0; i < pokemon.length; i++) {
    let pokemonName = pokemon[i].name.toLowerCase();
    if (pokemonName.includes(userInput)) {
      alertArray.push(pokemon[i]);
    }
  }
  displayResults();
}

function filterNumberResults(userNumber) {
  let userInput = userNumber;
  for (let i = 0; i < pokemon.length; i++) {
    let pokemonNumber = pokemon[i].id;
    if (pokemonNumber.includes(userInput)) {
      alertArray.push(pokemon[i]);
    }
  }
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