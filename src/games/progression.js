import _ from 'lodash';

import { arithmeticProgression } from '../math.js';

const genRound = () => {
  const start = _.random(-99, 99);
  const step = _.random(2, 20);
  const progression = arithmeticProgression(start, step, 10);
  const hiddenElementIndex = _.random(progression.length - 1);

  const question = progression.map((n, i) => (i === hiddenElementIndex ? '..' : n)).join(' ');
  const answer = progression[hiddenElementIndex].toString();

  return [question, answer];
};

const game = {
  description: 'What number is missing in the progression?',
  genRound,
};

export default game;
