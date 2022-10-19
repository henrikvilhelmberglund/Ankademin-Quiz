/*

*/

// multipleChoice
// checkboxes


const questions = [
  {
    questionType: "trueFalse",
    question: "Are there hedgehogs at the Urban Rescue Ranch?",
    answers: "Yes, No",
  },
  {
    questionType: "trueFalse",
    question: "Are there cats at the Urban Rescue Ranch?",
    answers: "Yes, No",
  },
  {
    questionType: "trueFalse",
    question: "Are there horses at the Urban Rescue Ranch?",
    answers: "Yes, No",
  },
  {
    questionType: "trueFalse",
    question: "Are there pigs at the Urban Rescue Ranch??",
    answers: "Yes, No",
  },
  {
    questionType: "trueFalse",
    question: "Are there kangaroos at the Urban Rescue RAre there hedgehogs at the Urban Rescue Ranch?",
    answers: "Yes, No",
  },
  {
    questionType: "trueFalse",
    question: "Is the owner of the Urban Rescue Ranch called Ben?",
    answers: "Yes, No",
  },
  {
    questionType: "trueFalse",
    question: "Are the animals cute?",
    answers: "Yes, No",
  },
  {
    questionType: "trueFalse",
    question: "Has any animal ever escaped?",
    answers: "Yes, No",
  },
  {
    questionType: "trueFalse",
    question: "Is it possible to catch a goose and bring it home with you?",
    answers: "Yes, No",
  },
  {
    questionType: "trueFalse",
    question: "Is the Urban Rescue Ranch full now?",
    answers: "Yes, No",
  },
  {
    questionType: "checkboxes",
    question: "Select the ratite species present at the Urban Rescue Ranch.",
    answers: "Ostrich, Emu, Rhea, Kiwi",
  },
  {
    questionType: "checkboxes",
    question: "Select the flying bird species present at the Urban Rescue Ranch.",
    answers: "Call duck, Hawk, Goose, Flamingo",
  },
  {
    questionType: "multipleChoice",
    question: "What was at the location before it became the Urban Rescue Ranch?",
    answers: "A field, A gas station, A crackhouse, A farm",
  },
  {
    questionType: "multipleChoice",
    question: "What does the owner of the Urban Rescue Ranch like to add before his name?",
    answers: "Farmer, Mister, Ranger, Uncle",
  },
  {
    questionType: "multipleChoice",
    question: "hat is the goal the owner of the Urban Rescue Ranch has for his animal friend DaBaby?",
    answers: "To live a peaceful and happy life, To run from the edge to the other edge of the ranch in 10 seconds, To fight Jake Paul in a boxing match, To win a prize in an exhibition"
  },
];

let mainDiv = document.createElement("div");
document.body.append(mainDiv);
let darkModeToggleButton = document.createElement("button");
darkModeToggleButton.innerText = "Toggle Dark Mode";
darkModeToggleButton.addEventListener("click", () => { toggleDarkMode(); });
let darkMode = false;
mainDiv.append(darkModeToggleButton);

function toggleDarkMode() {
  if (darkMode) {
    document.body.className = "light";
    darkModeToggleButton.className = "light-button";
    darkModeToggleButton.innerText = "Toggle Dark Mode";
    darkMode = false;
  }
  else {

    document.body.className = "dark";
    darkModeToggleButton.className = "dark-button";

    darkModeToggleButton.innerText = "Toggle Light Mode";
    darkMode = true;
  }
}

function displayQuestion() {

}

