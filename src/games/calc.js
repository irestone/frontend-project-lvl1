import _ from 'lodash';

const MIN_NUMBER = 0;
const MAX_NUMBER = 99;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const genQuestionAndAnswerPair = () => {
  const a = _.random(MIN_NUMBER, MAX_NUMBER);
  const b = _.random(MIN_NUMBER, MAX_NUMBER);

  const operators = Object.keys(operations);
  const operator = operators[_.random(0, operators.length - 1)];
  const calculate = operations[operator];

  const question = `${a} ${operator} ${b}`;
  const answer = calculate(a, b).toString();

  return [question, answer];
};

const calc = {
  rules: 'What is the result of the expression?',
  genQuestionAndAnswerPair,
};

export default calc;
