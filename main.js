import '@master/css';
import styles from "./buttonstyles.js";
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
    answers: "*CALL *DUCK,Hawk,GOOSE,Flamingo",
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

// NOTE - currentQuestion;
let debug = false;
let currentQuestion = 0;
let userAnswers = [];
let darkMode = false;

let mainDiv = create({ elementType: "div", appendWhere: document.body, extraCSS: "justify-content:center" });
let darkModeToggleButton = create({ elementType: "button", prependWhere: document.body, innerText: "Toggle Dark Mode", className: "light-button", eventListenerFunc: () => toggleDarkMode(), extraCSS: styles.buttonDarkmodeExtraCSS });

/**
 * It creates an element of the type you specify, and then you can add a bunch of other stuff to it,
 * like a class, an id, an event listener, etc.
 * @returns The element that was created.
 */
function create({ elementType, appendWhere, innerText = "", eventListenerFunc, className = "no-class", extraCSS = "", value = "no-value", id = "no-id", name = "", htmlFor = "", type = "", prependWhere }) {
  let myElement = document.createElement(elementType);
  myElement.innerText = innerText;

  if (eventListenerFunc) {
    myElement.addEventListener("click", eventListenerFunc);
  }
  myElement.className += " " + className;
  myElement.className += " " + extraCSS;
  myElement.value = value;
  myElement.id = id;
  myElement.name = name;
  myElement.htmlFor = htmlFor;
  myElement.type = type;
  if (appendWhere) {
    appendWhere.append(myElement);
  }
  if (prependWhere) {
    prependWhere.prepend(myElement);
  }
  return myElement;
}

/**
 * If dark mode is on, turn it off and vice versa
 */
function toggleDarkMode() {
  let allButtons = document.querySelectorAll("button");
  if (darkMode) {
    document.body.className = "light";
    allButtons.forEach(button => button.className = button.className.replace("dark-button", "light-button"));
    darkModeToggleButton.innerText = "Toggle Dark Mode";
    darkMode = false;
  }
  else {
    document.body.className = "dark";
    allButtons.forEach(button => button.className = button.className.replace("light-button", "dark-button"));
    darkModeToggleButton.innerText = "Toggle Light Mode";
    darkMode = true;
  }
}

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

/**
 * It creates a start page for the quiz.
 */
function startQuizPage() {
  if (currentQuestion === 0) {
    mainDiv.innerHTML = "";
    mainDiv.className = "display:grid justify-content:center";
    create({ elementType: "h1", appendWhere: mainDiv, innerText: "Welcome to the quiz!" });
    create({ elementType: "h2", appendWhere: mainDiv, innerText: `This quiz is about the Urban Rescue Ranch youtube channel and has ${questions.length} questions. Good luck!` });
    let buttonDiv = create({ elementType: "div", appendWhere: mainDiv, extraCSS: "d:grid justify-content:center" });
    create({ elementType: "button", appendWhere: buttonDiv, innerText: "Start quiz", eventListenerFunc: () => displayQuestion(), className: darkMode ? "dark-button" : "light-button", extraCSS: styles.buttonSubmitExtraCSS });
  }
  // for debugging
  else {
    displayQuestion();
  }
}

let labelExtraCSS = "f:30";
// NOTE - displayQuestion()

/**
 * It creates the HTML elements for the question and answer(s) based on the question type.
 */
function displayQuestion() {
  mainDiv.innerHTML = "";
  create({ elementType: "h2", appendWhere: mainDiv, innerText: questions[currentQuestion].question, extraCSS: "f:36 text:center" });
  if (questions[currentQuestion].questionType === "trueFalse") {
    let innerDiv = create({ elementType: "div", appendWhere: mainDiv, extraCSS: "d:flex justify-content:center" });
    create({ elementType: "button", appendWhere: innerDiv, innerText: "Yes", eventListenerFunc: (e) => checkAnswer(e), className: darkMode ? "dark-button" : "light-button", extraCSS: styles.buttonYesNoExtraCSS });
    create({ elementType: "span", appendWhere: innerDiv, extraCSS: "w:50 d:inline-block" });
    create({ elementType: "button", appendWhere: innerDiv, innerText: "No", eventListenerFunc: (e) => checkAnswer(e), className: darkMode ? "dark-button" : "light-button", extraCSS: styles.buttonYesNoExtraCSS });
  }
  else if (questions[currentQuestion].questionType === "checkboxes") {
    questions[currentQuestion].answers.split(",").forEach(possibleAnswer => {
      let innerDiv = create({ elementType: "div", appendWhere: mainDiv, extraCSS: "d:block" });
      let checkboxDiv = create({ elementType: "div", appendWhere: innerDiv, extraCSS: "flex align-content:center" });
      create({ elementType: "span", appendWhere: checkboxDiv, extraCSS: "w:40 p:30" });
      create({ elementType: "input", appendWhere: checkboxDiv, value: possibleAnswer, id: possibleAnswer, type: "checkbox", extraCSS: "h:50 w:50 m:0 p:0 appearance:none b:2|solid|blue-70 bg:blue-60:checked" });
      create({ elementType: "label", appendWhere: checkboxDiv, innerText: capitalize(possibleAnswer), htmlFor: possibleAnswer, extraCSS: "f:30 p:0 m:10" });
    });
    create({ elementType: "br", appendWhere: mainDiv });
    let buttonDiv = create({ elementType: "div", appendWhere: mainDiv, extraCSS: "d:grid justify-content:center" });
    create({ elementType: "button", appendWhere: buttonDiv, innerText: "Submit", eventListenerFunc: (e) => checkAnswer(e), className: darkMode ? "dark-button" : "light-button", extraCSS: styles.buttonSubmitExtraCSS });
  }
  else if (questions[currentQuestion].questionType === "multipleChoice") {
    let innerDiv = create({ elementType: "div", appendWhere: mainDiv, extraCSS: "d:grid justify-content:center" });
    questions[currentQuestion].answers.split(",").forEach(possibleAnswer => {
      let radioButtonDiv = create({ elementType: "div", appendWhere: innerDiv, extraCSS: "f:30" });
      create({ elementType: "input", appendWhere: radioButtonDiv, type: "radio", id: possibleAnswer, name: "radioButton", value: possibleAnswer, extraCSS: "appearance:none round w:30 h:30 b:2|solid|blue-70 bg:blue-60:checked v:middle" });
      create({ elementType: "label", appendWhere: radioButtonDiv, innerText: debug ? possibleAnswer : capitalize(possibleAnswer), htmlFor: possibleAnswer, extraCSS: "v:middle m:10" });
    });
    create({ elementType: "br", appendWhere: mainDiv });
    let buttonDiv = create({ elementType: "div", appendWhere: mainDiv, extraCSS: "d:grid justify-content:center" });
    create({ elementType: "button", appendWhere: buttonDiv, innerText: "Submit", eventListenerFunc: (e) => checkAnswer(e), className: darkMode ? "dark-button" : "light-button", extraCSS: styles.buttonSubmitExtraCSS });
  }
}

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

    if (correctAnswers.includes(selectedRadioBox.value.toUpperCase())) {
      userAnswers.push("correct");
    }
    else {
      userAnswers.push("incorrect");
    }
    nextQuestion();
  }
}


/**
 * It checks if the current question is the last question, if it is, it displays the results, if it
 * isn't, it displays the next question.
 */
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    mainDiv.innerHTML = "";
    let showResultsDiv = create({ elementType: "div", appendWhere: mainDiv, extraCSS: "d:grid justify-content:center" });
    create({ elementType: "h1", innerText: "You finished the quiz!", appendWhere: showResultsDiv, extraCSS: "text:center" });
    create({ elementType: "br", appendWhere: showResultsDiv });
    create({ elementType: "button", appendWhere: showResultsDiv, innerText: "Show results!", eventListenerFunc: () => showResults(), className: darkMode ? "dark-button" : "light-button", extraCSS: "h:500 w:500 f:50" });
  }
  else {
    displayQuestion();
  }
}

/**
 * It creates a div for each question, and then appends a paragraph to each div that says whether the
 * user got the question right or wrong. It then creates a paragraph that says how many questions the
 * user got right out of the total number of questions. It then creates a button that resets the quiz
 */
function showResults() {
  mainDiv.innerHTML = "";
  let totalCorrect = 0;
  let totalDiv = create({ elementType: "div", appendWhere: mainDiv, extraCSS: "d:grid justify-content:center text:center " });
  userAnswers.forEach((userAnswer, i) => {
    let answerDiv = create({ elementType: "div", appendWhere: totalDiv, className: userAnswer === "correct" ? "result-green" : "result-red", extraCSS: "d:grid justify-content:center height:30px" });
    let userAnswerEmoji = userAnswer === "correct" ? "✔️" : "❌";
    totalCorrect = userAnswer === "correct" ? totalCorrect += 1 : totalCorrect;
    create({ elementType: "p", appendWhere: answerDiv, innerText: `Question ${i + 1}: ${userAnswerEmoji}` });
  });
  totalDiv.className += totalCorrect / questions.length > 0.75 ? "result-green" :
    totalCorrect / questions.length >= 0.5 ? "result-yellow" :
      totalCorrect / questions.length < 0.5 ? "result-red" : "error";
  let grade = totalCorrect / questions.length > 0.75 ? "Congratulations! You passed with honors!" :
    totalCorrect / questions.length >= 0.5 ? "Congratulations, you passed." :
      totalCorrect / questions.length < 0.5 ? "Unfortunately you didn't pass." : "error";
  create({ elementType: "p", id: "resultText", appendWhere: totalDiv, innerText: `You had a total of ${totalCorrect} out of ${questions.length} correct answers. ${grade}`, extraCSS: "f:30" });
  let buttonDiv = create({ elementType: "div", appendWhere: mainDiv, extraCSS: "d:grid justify-content:center text:center" });
  create({ elementType: "button", appendWhere: buttonDiv, innerText: "Reset quiz", className: darkMode ? "dark-button" : "light-button", eventListenerFunc: () => resetQuiz(), extraCSS: styles.resetQuizButtonExtraCSS });
}

/**
 * The resetQuiz function resets the currentQuestion to 0, the userAnswers array to an empty array, and
 * then calls the startQuizPage function.
 */
function resetQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  startQuizPage();
}

startQuizPage();