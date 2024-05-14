const queshions = [
  {
    queshion: "Which is largest animal in the world",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "blue Whale",
        correct: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },

  {
    queshion: "Which is largest animal in the world",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "blue Whale",
        correct: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    queshion: "Which is largest desert in the world",
    answers: [
      {
        text: "Kalahari",
        correct: false,
      },
      {
        text: "Gobi",
        correct: false,
      },
      {
        text: "Sahara",
        correct: false,
      },
      {
        text: "Antarctica",
        correct: true,
      },
    ],
  },
  {
    queshion: "Which is the smallest containent in the world?",
    answers: [
      {
        text: "Asia",
        correct: false,
      },
      {
        text: "Australia",
        correct: true,
      },
      {
        text: "Arctic",
        correct: false,
      },
      {
        text: "Africa",
        correct: false,
      },
    ],
  },
];

const queshionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");
let currentQueshionIndex = 0;
let score = 0;

function startQuiz() {
  currentQueshionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQueshion();
}

function showQueshion() {
  resetState();
  let currentQueshion = queshions[currentQueshionIndex];

  let queshionNo = currentQueshionIndex + 1;

  queshionElement.innerHTML = queshionNo + ". " + currentQueshion.queshion;

  currentQueshion.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// reset previous queshion and answer

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

// select answer function

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  queshionElement.innerHTML = `your score  ${score} out of ${queshions.length}!`;
  nextButton.innerHTML = "play again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQueshionIndex++;
  if (currentQueshionIndex < queshions.length) {
    showQueshion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQueshionIndex < queshions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
