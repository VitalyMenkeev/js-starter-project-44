#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetTheUser from '../src/cli.js';
import {getRandom} from '../src/cli.js';

const userName = greetTheUser();
console.log('What number is missing in the progression?');

for (let i = 0; i < 3; i += 1) {
  const startNum = getRandom(1, 50);
  const step = getRandom(1, 10);
  const progressionLength = getRandom(5, 15);
  let array = [startNum];
  const randomIndex = getRandom(0, progressionLength - 1);
  for (let i = 0; i < progressionLength; i += 1) {
    let middleValue = array[i] + step;
    array.push(middleValue);
  }
  const result = array[randomIndex];
  array[randomIndex] = '..';
  const userAnswer = readlineSync.questionInt(`${'Question: '}${array.join(' ')}${' '}`);
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

