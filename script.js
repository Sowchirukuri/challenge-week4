// Quiz questions
const questions = [
    {
      question: "Who invented Javascript?",
      choices: ["Brendan Eich", "Mark Zuckerberg", "Billgates", "Elon Musk"],
      correctAnswer: 0
    },
    {
      question: "Which of the following  keywords is used to define a variable in Javascript??",
      choices: ["var", "let", "both", "none"],
      correctAnswer: 2
    },
    {
      question: "Which of the following methods is used to access HTML elements using Javascript?",
      choices: ["getElementbyId()", "getElementsByClassName()", "Both", "None"],
      correctAnswer: 2
    },
]
  
  const quizContainer = document.getElementById("quiz");
  const startScreen = document.getElementById("start-screen");
  const startButton = document.getElementById("start-btn");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const endScreen = document.getElementById("end-screen");
  const scoreElement = document.getElementById("score");
  const initialsForm = document.getElementById("initials-form");
  const initialsInput = document.getElementById("initials");
  const highScoresLink = document.getElementById("high-scores");
  
  const timerElement = document.getElementById("timer");
  const timerDuration = 60;
  let timeLeft = timerDuration;
  let timerInterval;
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Starts the quiz
  function startQuiz() {
    // Hides start screen and show the quiz
    document.getElementById("start-screen").classList.add("hide");
    quizContainer.classList.remove("hide");
  
    // Starts the timer
    timerInterval = setInterval(function() {
      timeLeft--;
      updateTimer();
  
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  
    // Displays the first question
    showQuestion();
  }
  
  // Displays the current question and choices
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
  
    // Creates choice buttons
    currentQuestion.choices.forEach(function(choice, index) {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.setAttribute("data-index", index);
      choiceButton.addEventListener("click", checkAnswer);
      choicesElement.appendChild(document.createElement("li").appendChild(choiceButton));
    });
  }
  
  // Checks the selected answer
  function checkAnswer() {
    const selectedAnswer = parseInt(this.getAttribute("data-index"));
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Correct answer
      score++; // Increment the score
  
    } else {
      // Incorrect answer
      timeLeft -= 10; // Subtract 10 seconds from the timer
    }
    currentQuestionIndex++;
  
    if (currentQuestionIndex >= questions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
  
  // Ends the quiz
  function endQuiz() {
    clearInterval(timerInterval);
  
    // Hides the quiz and show the end screen
    quizContainer.classList.add("hide");
    endScreen.classList.remove("hide");
  
    // Displays the final score
    scoreElement.textContent = score;
  }
  
  // Updates the timer display
  function updateTimer() {
    timerElement.textContent = timeLeft;
  }
  // Starts the quiz when the start button is clicked
  startButton.addEventListener("click", startQuiz);

  



