import _ from 'lodash';
import gcdFn from 'gcd';

const MIN_NUMBER = 2;
const MAX_NUMBER = 99;

const genQuestionAndAnswerPair = () => {
  const a = _.random(MIN_NUMBER, MAX_NUMBER);
  const b = _.random(MIN_NUMBER, MAX_NUMBER);
  const numberPair = `${a} ${b}`;
  const expectedAnswer = gcdFn(a, b).toString();
  return [numberPair, expectedAnswer];
};

const gcd = {
  rules: 'Find the greatest common divisor of given numbers.',
  genQuestionAndAnswerPair,
};

export default gcd;
