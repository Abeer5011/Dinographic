const button = document.getElementById("btn")
const grid = document.getElementById("grid")
const formDino = document.getElementById("dino-compare")

let dietInput
let inchesInput
let feetInput
let nameInput
let weightInput

// // Generate Tiles for each Dino in Array

let dinoArr = []

// // Create Dino Constructor
class Dino {
  constructor(species, weight, height, diet, where, when, fact, pic) {
    this.species = species
    this.weight = weight
    this.height = height
    this.diet = diet
    this.where = where
    this.when = when
    this.fact = fact
    this.pic = pic
  }
}

// // Create Dino Objects

dinoArr[0] = new Dino(
  "Triceratops",
  13000,
  114,
  "herbavor",
  "North America",
  "Late Cretaceous",
  "First discovered in 1889 by Othniel Charles Marsh",
  "images/triceratops.png"
)
dinoArr[1] = new Dino(
  "Tyrannosaurus Rex",
  11905,
  114,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "The largest known skull measures in at 5 feet long.",
  "images/tyrannosaurusrex.png"
)
dinoArr[2] = new Dino(
  "Anklyosaurus",
  10500,
  55,
  "herbavor",
  "North America",
  "Late Cretaceous",
  "Anklyosaurus survived for approximately 135 million years.",
  "images/anklyosaurus.png"
)
dinoArr[3] = new Dino(
  "Brachiosaurus",
  70000,
  372,
  "carnivor",
  "North America",
  "Late Jurasic",
  "An asteroid was named 9954 Brachiosaurus in 1991.",
  "images/brachiosaurus.png"
)
dinoArr[4] = new Dino(
  "Stegosaurus",
  11600,
  79,
  "herbavor",
  "North America, Europe, Asia",
  "Late Jurasic to Early Cretaceous",
  "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
  "images/stegosaurus.png"
)
dinoArr[5] = new Dino(
  "Elasmosaurus",
  16000,
  59,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "Elasmosaurus was a marine reptile first discovered in Kansas.",
  "images/elasmosaurus.png"
)
dinoArr[6] = new Dino(
  "Pteranodon",
  44,
  22,
  "carnivor",
  "North America",
  "Late Cretaceous",
  "Actually a flying reptile, the Pteranodon is not a dinosaur.",
  "images/pteranodon.png"
)
dinoArr[7] = new Dino(
  "Pigeon",
  0.5,
  9,
  "herbavor",
  "World Wide",
  "Holocene",
  "All birds are living dinosaurs.",
  "images/pigeon.png"
)
let addH = "images/human.png"
dinoArr.splice(4, 0, addH)

// // Use IIFE to get human data from form

const humanInfo = () =>
  (() => {
    nameInput = document.getElementById("name").value
    feetInput = document.getElementById("feet").value
    inchesInput = document.getElementById("inches").value
    weightInput = document.getElementById("weight").value
    dietInput = document.getElementById("diet").value
    // Create Human Object
    const human = {
      name: nameInput,
      feet: feetInput,
      inches: inchesInput,
      weight: weightInput,
      diet: dietInput,
    }
    return {
      result() {
        human
      },
    }
  })()

// // On button click, prepare and display infographic
button.addEventListener("click", function () {
  const info = humanInfo()
  info.result()

  // // Remove form from screen
  formDino.remove()
  dinoArr.sort(() => 0.5 - Math.random())
  dinoInfo()
  weightDino()
  hightDino()
})

// // Create Dino Compare Method 1
// // NOTE: Weight in JSON file is in lbs, height in inches.
function dinoInfo() {
  for (let i = 0; i < dinoArr.length; i++) {
    if (dietInput === dinoArr[i].diet) {
      // // Add tiles to DOM

      grid.innerHTML += `
      <div class="grid-item">
      <h3>${dinoArr[i].species}</h3>
      <p>${dinoArr[i].fact} </p>
      <img src=${dinoArr[i].pic}>
      </div>
  `
    }
  }

  centerHuman()
}

// // Create Dino Compare Method 2
// // NOTE: Weight in JSON file is in lbs, height in inches.

function weightDino() {
  for (let i = 0; i < dinoArr.length; i++) {
    if (weightInput == dinoArr[i].weight) {
      grid.innerHTML += `
      <div class="grid-item">
      <h3>${dinoArr[i].species}</h3>
      <p>${dinoArr[i].fact} </p>
       <img src=${dinoArr[i].pic}>
      </div>
      `
    }
  }
}
// // Create Dino Compare Method 3
// // NOTE: Weight in JSON file is in lbs, height in inches.

function hightDino() {
  for (let i = 0; i < dinoArr.length; i++) {
    if (inchesInput == dinoArr[i].height) {
      grid.innerHTML += `
      <div class="grid-item">
      <h3>${dinoArr[i].species}</h3>
      <p>${dinoArr[i].fact} </p>
       <img src=${dinoArr[i].pic}>
      </div> 
     `
    }
  }
}

function centerHuman() {
  const body = `
  <div class="grid-item">
  <h3>${nameInput} </h3>
  <img src=${dinoArr[4]}>
  </div>
`

  grid.innerHTML += body
}
