import {getRandom} from './cli.js';
import readlineSync from 'readline-sync';

export const askUserAndCalculate = (userName) => {

  const operators = ['*', '-', '+'];
  const firstOperand = getRandom(1, 10);
  const secondOperand = getRandom(1, 10);
  const randomIndex = Math.floor(Math.random() * (operators.length));
  const operator = operators[randomIndex];
  let result = null;
  let userAnswer = null;
  let isGameOver = null;
  
  switch (operator) {

    case '+':
      result = firstOperand + secondOperand;
      userAnswer = readlineSync.questionInt(`${'Question: '}${firstOperand}${' '}${operator}${' '}${secondOperand}${' '}`);
      console.log(`${'Your answer: '}${userAnswer}`);
      if (userAnswer === result) {
        console.log('Correct!');
        isGameOver = false;
      } else {
        console.log(`${'\''}${userAnswer}${'\''}${' is wrong answer ;(. Correct answer was '}${'\''}${result}${'\''}`);
        console.log(`${'Let\'s try again, '}${userName}${'!'}`);
        isGameOver = true;
        break;
      }

      break;
    
    case '-':
      result = firstOperand - secondOperand;
      userAnswer = readlineSync.questionInt(`${'Question: '}${firstOperand}${' '}${operator}${' '}${secondOperand}${' '}`);
      console.log(`${'Your answer: '}${userAnswer}`);
      if (userAnswer === result) {
        console.log('Correct!');
        isGameOver = false;
      } else {
        console.log(`${'\''}${userAnswer}${'\''}${' is wrong answer ;(. Correct answer was '}${'\''}${result}${'\''}`);
        console.log(`${'Let\'s try again, '}${userName}${'!'}`);
        isGameOver = true;
        break;
      }
      break;

    case '*':
      result = firstOperand * secondOperand;
      userAnswer = readlineSync.questionInt(`${'Question: '}${firstOperand}${' '}${operator}${' '}${secondOperand}${' '}`);
      console.log(`${'Your answer: '}${userAnswer}`);
      if (userAnswer === result) {
        console.log('Correct!');
        isGameOver = false;
      } else {
        console.log(`${'\''}${userAnswer}${'\''}${' is wrong answer ;(. Correct answer was '}${'\''}${result}${'\''}`);
        console.log(`${'Let\'s try again, '}${userName}${'!'}`);
        isGameOver = true;
        break;
      }
      break;
    
    default:
      result = 'error';
      break;

 }
 return isGameOver;
};
export const getGreatestCommonDivisor = (num1, num2) => {
  if (num2 !== 0) {
    const gcd = num1 % num2;
    return getGreatestCommonDivisor(num2, gcd);
  }
  return num1;
};
export const isPrime = (number) => {
    if (number < 2) {
      return 'Число должно быть больше 1';
    } else if (number === 2) {
      return true;
    }
  
    let i = 2;
    const limit = Math.sqrt(number);
    while (i <= limit) {
      if (number % i === 0) {
        return false;
      }
      i +=1;
    }
    
    return true;
}