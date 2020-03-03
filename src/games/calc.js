import _ from 'lodash';

const MIN_NUMBER = 0;
const MAX_NUMBER = 99;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const genRandomExpression = () => {
  const a = _.random(MIN_NUMBER, MAX_NUMBER);
  const b = _.random(MIN_NUMBER, MAX_NUMBER);
  const operators = Object.keys(operations);
  const operator = operators[_.random(0, operators.length - 1)];
  return `${a} ${operator} ${b}`;
};

const evaluateExpression = (expression) => {
  const [a, operator, b] = expression.split(' ');
  return operations[operator](+a, +b);
};

const genQuestionAndAnswerPair = () => {
  const expression = genRandomExpression();
  const expectedAnswer = evaluateExpression(expression).toString();
  return [expression, expectedAnswer];
};

const calc = {
  rules: 'What is the result of the expression?',
  genQuestionAndAnswerPair,
};

export default calc;
