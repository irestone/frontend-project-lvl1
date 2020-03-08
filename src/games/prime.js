import _ from 'lodash';

import { isPrime } from '../math.js';

const genRoundData = () => {
  const randomNumber = _.random(2, 200);

  const question = randomNumber.toString();
  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const game = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  genRoundData,
};

export default game;
