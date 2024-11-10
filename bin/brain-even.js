#!/usr/bin/env node
import greetTheUser from "../src/cli.js";
import readlineSync from "readline-sync";
import { getRandom } from "../src/cli.js";

const userName = greetTheUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const number = getRandom(1, 1000);
  let isEven = null;
  let correctAnswer = null;
  if (number % 2 === 0) {
    isEven = true;
    correctAnswer = "yes";
  } else {
    isEven = false;
    correctAnswer = "no";
  }
  const userAnswer = readlineSync.question(`${"Question: "}${number}${" "}`);
  console.log(`${"Your answer: "}${userAnswer}`);
  if (
    (userAnswer === "yes" && isEven === true) ||
    (userAnswer === "no" && isEven === false)
  ) {
    console.log("Correct!");
    if (i === 2) {
      console.log(`${"Congratulations, "}${userName}${"!"}`);
    }
  } else {
    console.log(
      `${"'"}${userAnswer}${"'"}${" is wrong answer ;(. Correct answer was "}${"'"}${correctAnswer}${"'"}`
    );
    console.log(`${"Let's try again, "}${userName}${"!"}`);
    break;
  }
}
