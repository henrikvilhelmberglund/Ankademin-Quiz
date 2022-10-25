---
theme : "black"
transition: "slide"
highlightTheme: "one-monokai"
//logoImg: "logo.png"
slideNumber: false
title: "VSCode Reveal intro"
previewLinks: true
customTheme: slides
---

note to self, kopiera black.css till laptop 
paragraph *style me*{.red} text
```mermaid
graph TB
    A["displayQuestion()"] --> B[Användarinput] --> C(ＹＥＳ) --> checkanswerA("checkAnswer(e)") --> E(correct) --> nextquestion(Next Question) --> A
    B --> D(ｎｏ) --> checkanswerB("checkAnswer(e)") --> F(incorrect) --> nextquestion --> A

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class E green
     class F orange
```

:::{.green} 
hello! this is green!
:::

---

# ??? vad är det här?

--

## VSCode Reveal

(VSCode-extensionversion av libraryt reveal.js)

- Kan göra slides med .md (textfiler) där nya slides markeras med --- (tre bindestreck)
---

# Bakgrund till Quiz

--

Pratade på AW om djur -> göra quiz om djur!

--

# Urban Rescue Ranch

Youtubekanal av Ben Christie, Texas

<img data-src=urbanrescueranch.jpg></img>

---

# Demonstration av Quiz

[Click me!](http://henrikvilhelmberglund.github.io/Ankademin-Quiz)

---

Visa och förklara lite om koden

---

# 

```js
const questions = [
  {
    questionType: "trueFalse",
    question: "Are there hedgehogs at the Urban Rescue Ranch?",
    answers: "Yes,NO",
  },
  ...
  ]
```
  :::{.red}
  Yes
  :::
  :::{.green} 
  NO
  :::

--

Globala variabler 
```js {data-line-numbers="2|3"}
let debug = false;
let currentQuestion = 0;
let userAnswers = [];
let darkMode = false;
```

--

```js
function create({ elementType, appendWhere, 
innerText = "", eventListenerFunc, className = "no-class",
extraCSS = "", value = "no-value", id = "no-id", 
name = "", htmlFor = "", type = "", prependWhere }) {
  let myElement = document.createElement(elementType);
  myElement.innerText = innerText;

  if (eventListenerFunc) {
    myElement.addEventListener("click", eventListenerFunc);
  }
  myElement.className = className;
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
```
```js
create({ elementType: "h1", appendWhere: mainDiv, innerText: "Welcome to the quiz!" });
```

--

Visa andra funktioner i VSCode!
---

Buggar!

--

Jake Paul


--

---
Berätta vilka utmaningarna med projektet varit, och vilka lärdomar du hämtar från arbetet.

---