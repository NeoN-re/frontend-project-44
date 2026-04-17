import runGame from '../index.js'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  return operators[randomIndex]
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      return null
  }
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 30)
  const num2 = getRandomNumber(1, 30)
  const operator = getRandomOperator()
  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))
  return { question, correctAnswer }
}

const runCalcGame = () => {
  const gameDescription = 'What is the result of the expression?'
  runGame(gameDescription, generateRound)
}

export default runCalcGame
