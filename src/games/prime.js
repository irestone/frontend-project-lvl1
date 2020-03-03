import _ from 'lodash';

const TRUE_ANSWER = 'yes';
const FALSE_ANSWER = 'no';

const MIN_NUMBER = 3;
const MAX_NUMBER = 200;

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5, sqrt = Math.sqrt(n); i <= sqrt; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

const genQuestionAndAnswerPair = () => {
  const randomNumber = _.random(MIN_NUMBER, MAX_NUMBER);

  const question = randomNumber.toString();
  const answer = isPrime(randomNumber) ? TRUE_ANSWER : FALSE_ANSWER;

  return [question, answer];
};

const game = {
  rules: `Answer "${TRUE_ANSWER}" if given number is prime. Otherwise answer "${FALSE_ANSWER}".`,
  genQuestionAndAnswerPair,
};

export default game;
