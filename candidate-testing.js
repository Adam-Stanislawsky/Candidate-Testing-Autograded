const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
    "Who was the first American woman in space? ",
    "True or false: 5 kilometer == 5000 meters? ",
    "(5 + 3)/2 * 10 = ? ",
    "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
    "What is the minimum crew size for the ISS? "
  ];

let correctAnswers = [
    "Sally Ride",
    "true",
    "40",
    "Trajectory",
    "3"
  ];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < questions.length; i++) {
  candidateAnswers.push(input.question(questions[i]))
  };

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
   
  // (ORIGINAL FROM PT1) if (candidateAnswer === correctAnswer) {
   //   console.log("Correct!")
   //   } else {
   //     console.log("Incorrect.")
   // };
  let numberOfCorrectAnswers = 0;
  
  for (let i = 0; i < candidateAnswers.length; i++){
    if(candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()){
      numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
    }
  }

  let grade = (numberOfCorrectAnswers/5)*100;  //TODO 3.2 use this variable to calculate the candidates score.
  
  if (grade >= 80){
    console.log(`

Candidate Name: ${candidateName}
1) Who was the first American woman in space?
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}

2) True or false: 5000 meters = 5 kilometers.
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}

3) (5 + 3)/2 * 10 = ?
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}

5) What is the minimum crew size for the ISS?
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}

>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of 5 responses correct) <<<
>>> Status: PASSED <<<
    `);
  } else { console.log(`

Candidate Name: ${candidateName}
1) Who was the first American woman in space?
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}
  
2) True or false: 5000 meters = 5 kilometers.
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}
  
3) (5 + 3)/2 * 10 = ?
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}
  
4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}
  
5) What is the minimum crew size for the ISS?
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}
  
>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of 5 responses correct) <<<
>>> Status: FAILED <<<
    `);

  };

  return grade;
  
}




function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " +candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};