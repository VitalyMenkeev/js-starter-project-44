#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetTheUser, { getRandom } from '../src/cli.js';
import { isPrime } from '../src/index.js';

const userName = greetTheUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const number = getRandom(2, 20);
  const userAnswer = readlineSync.question(`${'Question: '}${number}${' '}`);
  if (
    (userAnswer === 'yes' && isPrime(number) === true) ||
    (userAnswer === 'no' && isPrime(number) === false)
  ) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`${'Congratulations, '}${userName}${'!'}`);
    }
  } else {
    console.log(
      `${"'"}${userAnswer}${"'"}${' is wrong answer ;(. Correct answer was '}${"'"}${
        isPrime(number) === true ? 'yes' : 'no'
      }${"'"}`
    );
    console.log(`${"Let's try again, "}${userName}${'!'}`);
    break;
  }
}
