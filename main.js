import './styles/master.css';
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
    answers: "Yes,NO",
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
    answers: "To live a peaceful and happy life,To run from the edge to the other edge of the ranch in 10 seconds,TO FIGHT *JAKE *PAUL IN A BOXING MATCH,To win a prize in an exhibition"
  },
];

let debug = false;
let mainDiv = document.createElement("div");
document.body.append(mainDiv);
let darkModeToggleButton = document.createElement("button");
darkModeToggleButton.className = "light-button";
darkModeToggleButton.innerText = "Toggle Dark Mode";
darkModeToggleButton.addEventListener("click", () => { toggleDarkMode(); });
let darkMode = false;
document.body.prepend(darkModeToggleButton);

/**
 * If dark mode is on, turn it off and vice versa
 */
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

// NOTE - currentQuestion;
let currentQuestion = 14;
displayQuestion();

/**
 * It takes a string, makes it an array, then iterates through the array, capitalizing the first
 * letter, and any letter after a *, then returns the string.
 * @param string - The string to capitalize.
 * @returns The string with the first letter capitalized and the rest lowercase.
 */
function capitalize(string) {
  string = Array.from(string);
  let capsNextCharacter = false;
  string.forEach((character, i) => {
    if (character === "*") {
      capsNextCharacter = true;
    }
    else if (capsNextCharacter) {
      string[i] = character.toUpperCase();
      capsNextCharacter = false;
    }
    else if (i === 0) {
      string[0] = character.toUpperCase();
    }
    else {
      string[i] = character.toLowerCase();
    }
  });
  string = string.join("");
  string = string.replaceAll("*", "");
  return string;
}

// NOTE - displayQuestion()
/**
 * It creates a question and its answers based on the question type.
 * @returns "trueFalse"
 */
function displayQuestion() {
  mainDiv.innerHTML = "";
  let questionH2 = document.createElement("h2");
  questionH2.innerText = questions[currentQuestion].question;
  questionH2.className = "font:40 font:heavy m:10 text:center";
  mainDiv.append(questionH2);

  if (questions[currentQuestion].questionType === "trueFalse") {
    let yesButton = document.createElement("button");
    yesButton.addEventListener("click", (e) => checkAnswer(e));
    yesButton.innerText = "Yes";
    yesButton.className = darkMode ? "dark-button" : "light-button";
    mainDiv.append(yesButton);
    let noButton = document.createElement("button");
    noButton.addEventListener("click", (e) => checkAnswer(e));
    noButton.innerText = "No";
    noButton.className = darkMode ? "dark-button" : "light-button";
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
      checkboxLabel.htmlFor = "checkbox";
      let checkboxDiv = document.createElement("div");
      mainDiv.append(checkboxDiv);
      checkboxDiv.append(checkbox);
      checkboxDiv.append(checkboxLabel);
    });
    let submitButton = document.createElement("button");
    submitButton.className = darkMode ? "button-light" : "button-dark";
    submitButton.addEventListener("click", (e) => checkAnswer(e));
    submitButton.innerText = "Submit";
    let buttonDiv = document.createElement("div");
    mainDiv.append(buttonDiv);
    buttonDiv.append(submitButton);
    return "checkboxes";
  }
  else if (questions[currentQuestion].questionType === "multipleChoice") {
    questions[currentQuestion].answers.split(",").forEach(possibleAnswer => {
      let radioButton = document.createElement("input");
      radioButton.id = "radioButton";
      radioButton.name = radioButton;
      radioButton.value = possibleAnswer;
      radioButton.className = "ac:normal";
      let radioButtonLabel = document.createElement("label");
      if (debug) {
        radioButtonLabel.innerText = possibleAnswer;
      }
      else {
        radioButtonLabel.innerText = capitalize(possibleAnswer);
      }
      radioButton.type = "radio";
      radioButton.className = "appearance:none round w:30 h:30 b:2|solid|blue-40 b:2|solid|blue-60:hover bg:blue-40:checked v:middle";
      radioButtonLabel.htmlFor = "radioButton";
      radioButtonLabel.className = "v:middle m:10";
      let radioButtonDiv = document.createElement("div");
      radioButtonDiv.className = "f:25! m:1.6rem";
      mainDiv.append(radioButtonDiv);
      radioButtonDiv.append(radioButton);
      radioButtonDiv.append(radioButtonLabel);
    });
    let submitButton = document.createElement("button");
    submitButton.className = darkMode ? "dark-button" : "light-button";
    submitButton.addEventListener("click", (e) => checkAnswer(e));
    submitButton.innerText = "Submit";
    let buttonDiv = document.createElement("div");
    mainDiv.append(buttonDiv);
    buttonDiv.append(submitButton);
    return "multipleChoice";
  }
}

let userAnswers = [];

/**
 * It takes the answers from the current question, splits them into an array, then checks each item in
 * the array to see if it's all uppercase. If it is, it pushes it to a new array.
 * @returns { correctAnswers: [ 'A', 'B' ], answer: 'A,B,c,d', answerArray: [ 'A', 'B', 'c', 'd' ]
 * }</code>
 */
function returnCorrectAnswers() {
  let answer = questions[currentQuestion].answers;
  let answerArray = answer.split(",");
  let correctAnswers = [];
  answerArray.forEach(item => {
    if (item === item.toUpperCase()) {
      correctAnswers.push(item);
    }
  });
  return { correctAnswers, answer, answerArray };
}
// fancy logpoint console.table thingy (assumes returning an object with vars)
// needs to be added at the end of the return statement!!
// {console.table($returnValue)}

/**
 * It checks the user's answer and pushes the result to the userAnswers array.
 * @param e - the event object
 * @returns "end"
 */
function checkAnswer(e) {
  let correctAnswers = returnCorrectAnswers().correctAnswers;
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
    nextQuestion();
  }
  else if (questions[currentQuestion].questionType === "multipleChoice") {
    let selectedRadioBox = document.querySelector("input:checked");

    // check if user selected the correct answers and not just everything
    if (correctAnswers.includes(selectedRadioBox.value.toUpperCase())) {
      userAnswers.push("correct");
    }
    else {
      userAnswers.push("incorrect");
    }
    nextQuestion();
    return "multipleChoice";
  }
  return "end";
}

/**
 * It creates a button that, when clicked, calls the showResults() function.
 */
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    mainDiv.innerHTML = "";
    let showResultsDiv = document.createElement("div");
    let br = document.createElement("br");
    mainDiv.append(br);
    mainDiv.append(showResultsDiv);
    let showResultsButton = document.createElement("button");
    showResultsButton.className = darkMode ? "dark-button" : "light-button";
    showResultsButton.innerText = "Show results!";
    showResultsButton.addEventListener("click", () => showResults());
    showResultsDiv.append(showResultsButton);
    showResults();
  }
  else {
    displayQuestion();
  }
}

/**
 * It creates a div for each question, and then appends a paragraph to each div that says whether the
 * user got the question right or wrong. It then creates a paragraph that says how many questions the
 * user got right, and appends a button to reset the quiz
 */
function showResults() {
  mainDiv.innerHTML = "";
  let totalCorrect = 0;
  let totalDiv = document.createElement("div");
  mainDiv.append(totalDiv);
  userAnswers.forEach((userAnswer, i) => {
    let answerDiv = document.createElement("div");
    answerDiv.className = userAnswer === "correct" ? "result-green" : "result-red";
    let userAnswerEmoji = userAnswer === "correct" ? "✔️" : "❌";
    totalCorrect = userAnswer === "correct" ? totalCorrect += 1 : totalCorrect;
    let p = `Question ${i + 1}: ${userAnswerEmoji}`;
    answerDiv.append(p);
    totalDiv.append(answerDiv);
  });
  let totalP = document.createElement("p");
  totalDiv.className = totalCorrect / questions.length > 0.75 ? "result-green" :
    totalCorrect / questions.length >= 0.5 ? "result-yellow" :
      totalCorrect / questions.length < 0.5 ? "result-red" : "error";
  let grade = totalCorrect / questions.length > 0.75 ? "Congratulations! You passed with honors!" :
    totalCorrect / questions.length >= 0.5 ? "Congratulations, you passed." :
      totalCorrect / questions.length < 0.5 ? "Unfortunately you didn't pass." : "error";
  totalP.innerText = `You had a total of ${totalCorrect} out of ${questions.length} correct answers. ${grade}`;
  totalDiv.append(totalP);
  let resetButton = document.createElement("button");
  resetButton.innerText = "Reset Quiz";
  resetButton.className = darkMode ? "dark-button" : "light-button";
  resetButton.addEventListener("click", () => resetQuiz());
  totalDiv.append(resetButton);
}

/**
 * The resetQuiz function resets the currentQuestion to 0, empties the userAnswers array, and displays
 * the first question.
 */
function resetQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  displayQuestion();
}