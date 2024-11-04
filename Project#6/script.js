// Quiz data with questions, answers, and the correct answer
const quizQuestions = [
    {
        question: "What does HTML stand for ?",
        answers: {
            a: "Hyper Text Markup Language",
            b: "Home Tool Markup Language",
            c: "High Text Markup Language"
        },
        correctAnswer: "a"
    },
    {
        question: "What does CSS stand for ?",
        answers: {
            a: "Creative Style Sheets",
            b: "Cascading Style Sheets",
            c: "Computer Style Sheets"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the correct Js syntax ?",
        answers: {
            a: "echo 'Hello World';",
            b: "console.log('Hello World');",
            c: "print('Hello World');"
        },
        correctAnswer: "b"
    }
];

// Function to generate and display the quiz
function buildQuiz() {
    const quizContainer = document.getElementById("quiz");
    const output = quizQuestions.map((currentQuestion, questionNumber) => {
        const answers = Object.entries(currentQuestion.answers).map(([letter, answer]) =>
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter}: ${answer}
            </label>`
        ).join("");
        return `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers}</div>`;
    });
    quizContainer.innerHTML = output.join("");
}

// Function to calculate and display results
function showResults() {
    const answerContainers = document.querySelectorAll(".answers");
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selectedAnswer = (answerContainer.querySelector(`input[name="question${questionNumber}"]:checked`) || {}).value;

        // Check if the answer is correct
        if (selectedAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainer.style.color = "green"; // Correct answer styling
        } else {
            answerContainer.style.color = "red"; // Incorrect answer styling
        }
    });

    // Determine message and color based on score
    let feedbackMessage;
    let feedbackColor;
    if (numCorrect === quizQuestions.length) {
        feedbackMessage = "Excellent!";
        feedbackColor = "green";
    } else if (numCorrect === quizQuestions.length - 1) {
        feedbackMessage = "Good effort!";
        feedbackColor = "blue";
    } else if (numCorrect > 0) {
        feedbackMessage = "Try again!";
        feedbackColor = "brown";
    } else {
        feedbackMessage = "Better luck next time!";
        feedbackColor = "red";
    }

    // Display results and feedback message with color
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = `You scored ${numCorrect} out of ${quizQuestions.length}.<br><strong style="color: ${feedbackColor};">${feedbackMessage}</strong>`;

    // Show the Try Again button
    document.getElementById("try-again").style.display = "inline-block";
}

// Function to reset the quiz
function tryAgain() {
    // Clear the results and reset colors
    document.getElementById("results").innerHTML = "";
    document.getElementById("try-again").style.display = "none";

    const answerContainers = document.querySelectorAll(".answers");
    answerContainers.forEach(container => container.style.color = "black");

    // Uncheck all radio buttons
    const allRadios = document.querySelectorAll("input[type=radio]");
    allRadios.forEach(radio => radio.checked = false);
}

// Event listener to build the quiz and handle buttons
document.addEventListener("DOMContentLoaded", () => {
    buildQuiz();
    document.getElementById("submit").addEventListener("click", showResults);
    document.getElementById("try-again").addEventListener("click", tryAgain);
});
