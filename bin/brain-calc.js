#!/usr/bin/env node
import greetTheUser from "../src/cli.js";
import { askUserAndCalculate } from "../src/index.js";

const userName = greetTheUser();
console.log("What is the result of the expression?");
for (let i = 0; i < 3; i += 1) {
  const isGameOver = askUserAndCalculate(userName);
  if (isGameOver === true) {
    break;
  } else if (i === 2 && isGameOver === false) {
    console.log(`${"Congratulations, "}${userName}${"!"}`);
  }
}
