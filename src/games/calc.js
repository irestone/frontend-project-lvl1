import _ from 'lodash';

const MAX_NUMBER = 99;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const genQuestionAndAnswerPair = () => {
  const a = _.random(MAX_NUMBER);
  const b = _.random(MAX_NUMBER);
  const operator = _.sample(Object.keys(operations));
  const calculate = operations[operator];

  const question = `${a} ${operator} ${b}`;
  const answer = calculate(a, b).toString();

  return [question, answer];
};

const game = {
  rules: 'What is the result of the expression?',
  genQuestionAndAnswerPair,
};

export default game;
