import runGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  const limit = Math.sqrt(number);
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = String(randomNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const runPrimeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(gameDescription, generateRound);
};

export default runPrimeGame;
