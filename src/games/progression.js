import _ from 'lodash';

import { genProgression } from '../utils/math.js';

const PROGRESSION_LENGTH = 10;
const MIN_START = -99;
const MAX_START = 99;
const MIN_STEP = 2;
const MAX_STEP = 20;

const genQuestionAndAnswerPair = () => {
  const start = _.random(MIN_START, MAX_START);
  const step = _.random(MIN_STEP, MAX_STEP);
  const progression = genProgression(start, step, PROGRESSION_LENGTH);
  const pullIndex = _.random(PROGRESSION_LENGTH - 1);
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
