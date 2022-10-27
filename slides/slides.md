---
theme : "black"
transition: "slide"
highlightTheme: "one-monokai"
//logoImg: "logo.png"
slideNumber: true
title: "VSCode Reveal intro"
previewLinks: false
customTheme: slides
defaultTiming: 20
---

## Presentation(?) Ankademin Quiz
##### Henrik Berglund FEND22
:::{.megaemoji}
🤯
:::

---

# Kommer prata om

- Bakgrund till quiz
- Demonstration av quiz
- Visa och förklara lite om koden
- Utmaningar: Buggar
- Lärdomar

---

# ??? vad är det här?

--

## VSCode Reveal

(VSCode-extensionversion av libraryt reveal.js)

- Kan göra slides med .md (textfiler) där nya slides markeras med --- (tre bindestreck)

note: nice när man ändå är i VSCode

---

# Bakgrund till Quiz

--

Pratade på AW om djur -> göra quiz om djur!

--

# Urban Rescue Ranch

Youtubekanal av Ben Christie, Texas

<img data-src=urbanrescueranch.jpg></img>

note: tar hand om djur som blivit övergivna eller skadade djur och tar hand om dem, sen hittar nya ägare (husdjur)

---

# Demonstration av Quiz

[Click me!](http://henrikvilhelmberglund.github.io/Ankademin-Quiz)

note: dark mode
två knapper (enkelt)
bra för mobil om man slipper ha radiobutton för två alternativ (eller bara jag som är lat)
visa responsivitet genom att dra i fönstret
man kan klicka på label också


---

# Visa och förklara lite om koden

--

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

  note: jag lade in de rätta svaren med stora bokstäver

--

Globala variabler 
```js {data-line-numbers="2|3"}
let debug = false;
let currentQuestion = 0;
let userAnswers = [];
let darkMode = false;
```

note: nice med currentQuestion variabel om man vill testa och reloadar sidan ofta, slipper fylla i alla fält hela tiden
userAnswers är en array där correct eller incorrect sparas för att göra det enklare att räkna ut saker i slutet

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

note: jag har ingen HTML så koden blev full med createElement etc
med en funktion kan jag ha byta ut t.ex 4 rader till 1 rad, i vissa fall fler
nackdelen är långa rader horisontellt men ändå ok för att jag sätter elementType först

--

```mermaid
graph TB
    A["displayQuestion()"] --> B[Användarinput] --> C(ＹＥＳ) --> checkanswerA("checkAnswer(e)") --> E(correct) --> nextquestion(Next Question) --> A
    B --> D(ｎｏ) --> checkanswerB("checkAnswer(e)") --> F(incorrect) --> nextquestion --> A

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class E green
     class F orange
```


--

Visa andra funktioner i VSCode!

note: visa t.ex displayQuestion()

---

# Utmaningar: Buggar!

---

# Jake Paul

<img data-src=jake-paul.jpg></img>

--

## question: 

What is the goal the owner of the Urban Rescue Ranch has for his animal friend DaBaby?

## answers: 

To live a peaceful and happy life,

To run from the edge to the other edge of the ranch in 10 seconds

TO FIGHT JAKE PAUL IN A BOXING MATCH

To win a prize in an exhibition

--

Smart funktion

```js
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter('foo')); // Foo
```

note: det här är en smart funktion, så här ser min ut

--

Min funktion
```js
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
console.log(capitalize("FOO FIGHTERS"); // Foo fighters
```

--

TO FIGHT JAKE PAUL IN A BOXING MATCH

:::{.element class="fragment"}
To fight jake paul in a boxing match
:::

:::{.element class="fragment"}
To fight Jake Paul in a boxing match
:::

--

```js {data-line-numbers="3|5-7|8-10"}
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
```

:::{.element class="fragment"}
```js
capitalize("TO FIGHT *JAKE *PAUL IN A BOXING MATCH")
```
:::
:::{.element class="fragment" .green}
```
// To fight Jake Paul in a boxing match 
```
:fa-check:
:::


--


![](smart.gif)
{.r-stretch}

---

# CSS

protip: inte "" i .css

# 

---

# Lärdomar

--

# VSCode är bra

- Bracket Pairs {."fragment"}
- ErrorLens-extension {."fragment"}
- quick-lint-js {."fragment"}

--

## Det är bra att ha specialiserade funktioner

- create()
- toggleDarkMode()
- capitalize()
- startQuizPage()
- displayQuestion()
- returnCorrectAnswers()
- checkAnswer()
- nextQuestion()
- showResults()
- resetQuiz() 

note: enklare att tänka en funktion i taget
men ändå nice att dela upp displayQuestion och checkAnswer i tre delar, en för varje typ

--

# NPM + Bundler(?)

- Behövdes för att ha installerad version av Master CSS {."fragment"}
- Vite {."fragment"}

--

## npm install library-name

installerar library-name
- npm install @master/css
- npm create vite@latest

men finns också yarn och pnpm (???)

--

från package.json

```
...
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
...
```
![](I-Have-No-Idea-What-I-m-Doing.jpg)

---

## Tack för att ni lyssnade!

:::{.megaemoji}
🙇
:::