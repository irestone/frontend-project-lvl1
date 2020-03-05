import _ from 'lodash';

import { isEven } from '../math.js';

const TRUE_ANSWER = 'yes';
const FALSE_ANSWER = 'no';

const genQuestionAndAnswerPair = () => {
  const randomNumber = _.random(-999, 999);

  const question = randomNumber.toString();
  const answer = isEven(randomNumber) ? TRUE_ANSWER : FALSE_ANSWER;

  return [question, answer];
};

const game = {
  rules: `Answer "${TRUE_ANSWER}" if the number is even, otherwise answer "${FALSE_ANSWER}".`,
  genQuestionAndAnswerPair,
};

export default game;
