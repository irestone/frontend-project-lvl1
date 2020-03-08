import _ from 'lodash';

import { isEven } from '../math.js';

const genRound = () => {
  const randomNumber = _.random(-999, 999);

  const question = randomNumber.toString();
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const game = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  genRound,
};

export default game;
