/*
Select the ratite species present at the Urban Rescue Ranch.
-Ostrich -Emu -Rhea -Kiwi 

Select the flying bird species present at the Urban Rescue Ranch.
-Call duck -Hawk -Goose -Flamingo

What was at the location before it became the Urban Rescue Ranch?
A. A field B. A gas station C. A crackhouse  D. A farm

What does the owner of the Urban Rescue Ranch like to add before his name?
A. Farmer B. Mister C. Ranger D. Uncle

What is the goal the owner of the Urban Rescue Ranch has for his animal friend DaBaby?
A. To live a peaceful and happy life B. To run from the edge to the other edge in 10 seconds C. To fight Jake Paul in a boxing match  D. To win a prize in an exhibition

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

