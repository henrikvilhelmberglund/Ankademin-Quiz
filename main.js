/*

*/

// multipleChoice
// checkboxes


const questions = [
  {
    questionType: "trueFalse",
    question: "Are there hedgehogs at the Urban Rescue Ranch?",
    answers: "Yes,NO",
  },
  {
    questionType: "trueFalse",
    question: "Are there cats at the Urban Rescue Ranch?",
    answers: "YES,No",
  },
  {
    questionType: "trueFalse",
    question: "Are there horses at the Urban Rescue Ranch?",
    answers: "Yes,No",
  },
  {
    questionType: "trueFalse",
    question: "Are there pigs at the Urban Rescue Ranch?",
    answers: "YES,No",
  },
  {
    questionType: "trueFalse",
    question: "Are there kangaroos at the Urban Rescue Ranch?",
    answers: "YES,No",
  },
  {
    questionType: "trueFalse",
    question: "Is the owner of the Urban Rescue Ranch called Ben?",
    answers: "YES,No",
  },
  {
    questionType: "trueFalse",
    question: "Are the animals cute?",
    answers: "YES,No",
  },
  {
    questionType: "trueFalse",
    question: "Has any animal ever escaped?",
    answers: "YES,No",
  },
  {
    questionType: "trueFalse",
    question: "Is it possible to catch a goose and bring it home with you?",
    answers: "YES,No",
  },
  {
    questionType: "trueFalse",
    question: "Is the Urban Rescue Ranch full now?",
    answers: "Yes,NO",
  },
  {
    questionType: "checkboxes",
    question: "Select the ratite species present at the Urban Rescue Ranch.",
    answers: "OSTRICH,EMU,RHEA,Kiwi",
  },
  {
    questionType: "checkboxes",
    question: "Select the flying bird species present at the Urban Rescue Ranch.",
    answers: "CALL DUCK,Hawk,GOOSE,Flamingo",
  },
  {
    questionType: "multipleChoice",
    question: "What was at the location before it became the Urban Rescue Ranch?",
    answers: "A field,A gas station,A CRACKHOUSE,A farm",
  },
  {
    questionType: "multipleChoice",
    question: "What does the owner of the Urban Rescue Ranch like to add before his name?",
    answers: "Farmer,Mister,Ranger,UNCLE",
  },
  {
    questionType: "multipleChoice",
    question: "What is the goal the owner of the Urban Rescue Ranch has for his animal friend DaBaby?",
    answers: "To live a peaceful and happy life,To run from the edge to the other edge of the ranch in 10 seconds,TO FIGHT JAKE PAUL IN A BOXING MATCH,To win a prize in an exhibition"
  },
];

let debug = true;
let mainDiv = document.createElement("div");
document.body.append(mainDiv);
let darkModeToggleButton = document.createElement("button");
darkModeToggleButton.className = "light-button";
darkModeToggleButton.innerText = "Toggle Dark Mode";
darkModeToggleButton.addEventListener("click", () => { toggleDarkMode(); });
let darkMode = false;
document.body.prepend(darkModeToggleButton);

function toggleDarkMode() {
  if (darkMode) {
    document.body.className = "light";
    let allButtons = document.querySelectorAll("button");
    allButtons.forEach(button => button.className = "light-button");
    darkModeToggleButton.innerText = "Toggle Dark Mode";
    darkMode = false;
  }
  else {
    document.body.className = "dark";
    let allButtons = document.querySelectorAll("button");
    allButtons.forEach(button => button.className = "dark-button");
    darkModeToggleButton.innerText = "Toggle Light Mode";
    darkMode = true;
  }
}

let currentQuestion = 12;

displayQuestion();

function capitalize(string) {
  string = Array.from(string);

  string.forEach((character, i) => {
    if (i === 0) {
      string[0] = character.toUpperCase();
    }
    else {
      string[i] = character.toLowerCase();
    }
  });
  string = string.join("");
  return string;
}


function displayQuestion() {
  mainDiv.innerHTML = "";
  let questionP = document.createElement("p");
  questionP.innerText = questions[currentQuestion].question;
  mainDiv.append(questionP);

  if (questions[currentQuestion].questionType === "trueFalse") {
    let yesButton = document.createElement("button");
    yesButton.addEventListener("click", (e) => checkAnswer(e));
    yesButton.innerText = "Yes";
    mainDiv.append(yesButton);
    let noButton = document.createElement("button");
    noButton.addEventListener("click", (e) => checkAnswer(e));
    noButton.innerText = "No";
    mainDiv.append(noButton);
    return "trueFalse";
  }
  else if (questions[currentQuestion].questionType === "checkboxes") {
    questions[currentQuestion].answers.split(",").forEach(possibleAnswer => {
      let checkbox = document.createElement("input");
      checkbox.id = "checkbox";
      checkbox.value = possibleAnswer;
      let checkboxLabel = document.createElement("label");
      if (debug) {
        checkboxLabel.innerText = possibleAnswer;
      }
      else {
        checkboxLabel.innerText = capitalize(possibleAnswer);
      }

      checkbox.type = "checkbox";
      mainDiv.append(checkbox);
      checkboxLabel.htmlFor = "checkbox";
      mainDiv.append(checkboxLabel);
    });
    let submitButton = document.createElement("button");
    submitButton.className = darkMode ? "button-light" : "button-dark";
    submitButton.addEventListener("click", (e) => checkAnswer(e));
    submitButton.innerText = "Submit";
    mainDiv.append(submitButton);

    return "checkboxes";
  }
  else if (questions[currentQuestion].questionType === "multipleChoice") {
    questions[currentQuestion].answers.split(",").forEach(possibleAnswer => {
      let radioButton = document.createElement("input");
      radioButton.id = "radioButton";
      radioButton.name = radioButton;
      radioButton.value = possibleAnswer;
      let radioButtonLabel = document.createElement("label");
      if (debug) {
        radioButtonLabel.innerText = possibleAnswer;
      }
      else {
        radioButtonLabel.innerText = capitalize(possibleAnswer);
      }
      radioButton.type = "radio";
      radioButtonLabel.htmlFor = "radioButton";
      mainDiv.append(radioButton);
      mainDiv.append(radioButtonLabel);
    });
    let submitButton = document.createElement("button");
    submitButton.className = darkMode ? "dark-button" : "light-button";
    submitButton.addEventListener("click", (e) => checkAnswer(e));
    submitButton.innerText = "Submit";
    mainDiv.append(submitButton);

    return "multipleChoice";
  }
}

let userAnswers = [];

function returnCorrectAnswers() {
  let answer = questions[currentQuestion].answers;
  let answerArray = answer.split(",");
  let correctAnswers = [];
  answerArray.forEach(item => {
    if (item === item.toUpperCase()) {
      correctAnswers.push(item);
    }
  });
  return correctAnswers;
}

function checkAnswer(e) {
  let correctAnswers = returnCorrectAnswers();
  if (questions[currentQuestion].questionType === "trueFalse") {
    if (e.target.innerText.toUpperCase() === correctAnswers[0]) {
      userAnswers.push("correct");
    }
    else {
      userAnswers.push("incorrect");
    }
    nextQuestion();
  }
  else if (questions[currentQuestion].questionType === "checkboxes") {
    //nextQuestion(); 
    let selectedCheckboxes = Array.from(document.querySelectorAll("input:checked")).map(element => element.value);
    let correctLength = 0;
    selectedCheckboxes.forEach(answer => {
      if (correctAnswers.includes(answer)) {
        correctLength += 1;
      }

    });
    if (correctLength === correctAnswers.length) {
      // check if user selected the correct answers and not just everything
      if (selectedCheckboxes.length === correctAnswers.length) {
        userAnswers.push("correct");
      }
      else {
        userAnswers.push("incorrect");
      }
    }
    else {
      userAnswers.push("incorrect");
    }
  }
  else if (questions[currentQuestion].questionType === "multipleChoice") {
    //nextQuestion();
    //nextQuestion(); 
    let selectedRadioBox = document.querySelector("input:checked");

    // check if user selected the correct answers and not just everything
    if (correctAnswers.includes(selectedRadioBox.value.toUpperCase())) {
      userAnswers.push("correct");
    }
    else {
      userAnswers.push("incorrect");
    }

    return "multipleChoice";
  }

  return "end";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    console.log("end!");
  }
  else {
    displayQuestion();
  }
}

