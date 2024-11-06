#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetTheUser from '../src/cli.js';
import {getRandom} from '../src/cli.js';
import {getGreatestCommonDivisor} from '../src/index.js';

const userName = greetTheUser();
console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
  let num1 = getRandom(1, 20);
  let num2 = getRandom(1, 20);
  let result = getGreatestCommonDivisor(num1, num2);
  const userAnswer = readlineSync.questionInt(`${'Question: '}${num1}${' '}${num2}${' '}`);
  console.log(`${'Your answer: '}${userAnswer}`);
  if (userAnswer === result) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`${'Congratulations, '}${userName}${'!'}`);
    }
  } else {
    console.log(`${'\''}${userAnswer}${'\''}${' is wrong answer ;(. Correct answer was '}${'\''}${result}${'\''}`);
    console.log(`${'Let\'s try again, '}${userName}${'!'}`);
    break;
  }
}