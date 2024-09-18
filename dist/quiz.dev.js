"use strict";

// const fs = require('fs');
// const readline = require('readline');
// // Load questions from the JSON file
// let questions;
// try {
//   const data = fs.readFileSync('questions.json', 'utf8');
//   questions = JSON.parse(data);
// } catch (err) {
//   console.error('Error loading quiz questions:', err);
//   process.exit(1); // Exit if there's an error loading the questions
// }
// let score = 0;
// let currentQuestionIndex = 0;
// const totalQuizTime = 60; // 60 seconds for the entire quiz
// let remainingQuizTime = totalQuizTime;
// const timePerQuestion = 10; // 10 seconds per question
// let currentQuestionTime = timePerQuestion;
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// function startQuiz() {
//   console.log('Quiz Started! You have 60 seconds to complete it.');
//   console.log('Each question has 10 seconds to answer.\n');
//   // Global countdown timer for the quiz (60 seconds)
//   const quizTimer = setInterval(() => {
//     remainingQuizTime--;
//     // process.stdout.write(`\rTime left for the quiz: ${remainingQuizTime}s`); // Show remaining time
//     if (remainingQuizTime <= 0) {
//       clearInterval(quizTimer);
//       rl.close(); // Close readline interface before ending quiz
//       endQuiz();
//     }
//   }, 1000);
//   askQuestion(quizTimer); // Pass the global timer
// }
// function askQuestion(quizTimer) {
//   if (currentQuestionIndex >= questions.length) {
//     clearInterval(quizTimer);
//     rl.close(); // Close readline interface before ending quiz
//     endQuiz();
//     return;
//   }
//   const { question, answer } = questions[currentQuestionIndex];
//   currentQuestionTime = timePerQuestion;
//   console.log(`\nQuestion ${currentQuestionIndex + 1}: ${question}`);
//   // Timer for each individual question (10 seconds)
//   const questionTimer = setInterval(() => {
//     currentQuestionTime--;
//     if (currentQuestionTime > 0) {
//     //   process.stdout.write(`\rTime left for this question: ${currentQuestionTime}s`); // Overwrite the same line for countdown
//     } else {
//       clearInterval(questionTimer);
//       console.log('\nTime’s up for this question!');
//       nextQuestion(quizTimer); // Automatically move to the next question
//     }
//   }, 1000);
//   // Non-blocking user input handling
//   rl.question('\nYour answer: ', (userAnswer) => {
//     clearInterval(questionTimer); // Stop the question timer after the answer is given
//     if (userAnswer !== 'true' && userAnswer !== 'false') {
//       console.log('Invalid answer! Please enter true/false.');
//       askQuestion(quizTimer); // Retry the same question
//     } else {
//       // Check the correctness of the answer
//       if (userAnswer === answer) {
//         console.log('Correct!\n');
//         score++;
//       } else {
//         console.log('Wrong!\n');
//       }
//       // Move to the next question
//       nextQuestion(quizTimer);
//     }
//   });
// }
// function nextQuestion(quizTimer) {
//   currentQuestionIndex++;
//   askQuestion(quizTimer);
// }
// function endQuiz() {
//   console.log(`\nQuiz Over! Your final score is: ${score}/${questions.length}`);
//   process.exit(0); // Exit the quiz
// }
// // Start the quiz
// startQuiz();
var fs = require('fs');

var readline = require('readline'); // const chalk = require('chalk');


var questions;

try {
  var data = fs.readFileSync('questions.json', 'utf8');
  questions = JSON.parse(data);
} catch (err) {
  console.error('Error loading quiz questions:', err);
  process.exit(1);
}

var score = 0;
var currentQuestionIndex = 0;
var totalQuizTime = 60;
var remainingQuizTime = totalQuizTime;
var timePerQuestion = 10;
var currentQuestionTime = timePerQuestion;
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startQuiz() {
  var quizTimer;
  return regeneratorRuntime.async(function startQuiz$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Quiz Started! You have 60 seconds to complete it.');
          console.log('Each question has 10 seconds to answer.\n');
          quizTimer = setInterval(function () {
            remainingQuizTime--;

            if (remainingQuizTime <= 0) {
              clearInterval(quizTimer);
              rl.close();
              endQuiz();
            }
          }, 1000);

        case 3:
          if (!(currentQuestionIndex < questions.length && remainingQuizTime > 0)) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(askQuestion());

        case 6:
          _context.next = 3;
          break;

        case 8:
          clearInterval(quizTimer);
          rl.close();
          endQuiz();

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

function askQuestion() {
  return new Promise(function (resolve) {
    if (currentQuestionIndex >= questions.length) {
      return resolve();
    }

    var _questions$currentQue = questions[currentQuestionIndex],
        question = _questions$currentQue.question,
        answer = _questions$currentQue.answer,
        explanation = _questions$currentQue.explanation;
    currentQuestionTime = timePerQuestion;
    console.log("\nQuestion ".concat(currentQuestionIndex + 1, ": ").concat(question));
    var questionTimer = setInterval(function () {
      currentQuestionTime--;

      if (currentQuestionTime <= 0) {
        clearInterval(questionTimer);
        console.log('\nTime’s up for this question!');
        setTimeout(function () {
          currentQuestionIndex++;
          resolve();
        }, 1000);
      }
    }, 1000);
    rl.question('Your answer: ', function (userAnswer) {
      clearInterval(questionTimer);

      if (userAnswer !== 'true' && userAnswer !== 'false') {
        console.log('Invalid answer! Please enter true/false.');
        return resolve(); // Skip the current question and move to the next
      }

      if (userAnswer === answer) {
        console.log('Correct!\n');
        score++;
      } else {
        console.log('Wrong!');
        console.log("The correct answer is: ".concat(answer));
        console.log("Explanation: ".concat(explanation));
      }

      setTimeout(function () {
        currentQuestionIndex++;
        resolve();
      }, 1000);
    });
  });
}

function endQuiz() {
  console.log("\nQuiz Over! Your final score is: ".concat(score, "/").concat(questions.length));
  process.exit(0);
}

startQuiz();