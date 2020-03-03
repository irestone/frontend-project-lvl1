import _ from 'lodash';

const MIN_NUMBER = 2;
const MAX_NUMBER = 99;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const genQuestionAndAnswerPair = () => {
  const a = _.random(MIN_NUMBER, MAX_NUMBER);
  const b = _.random(MIN_NUMBER, MAX_NUMBER);

  const question = `${a} ${b}`;
  const answer = gcd(a, b).toString();

  return [question, answer];
};

const game = {
  rules: 'Find the greatest common divisor of given numbers.',
  genQuestionAndAnswerPair,
};

export default game;
