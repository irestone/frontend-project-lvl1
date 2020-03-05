import _ from 'lodash';

import { ap } from '../math.js';

const genQuestionAndAnswerPair = () => {
  const start = _.random(-99, 99);
  const step = _.random(2, 20);
  const progression = ap(start, step, 10);
  const pullIndex = _.random(progression.length - 1);
  const pulledMember = progression[pullIndex];

  const question = progression.reduce((acc, n, i) => `${acc} ${i === pullIndex ? '..' : n}`, '');
  const answer = pulledMember.toString();

  return [question, answer];
};

const game = {
  rules: 'What number is missing in the progression?',
  genQuestionAndAnswerPair,
};

export default game;
