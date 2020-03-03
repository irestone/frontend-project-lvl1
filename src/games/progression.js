import _ from 'lodash';

const PROGRESSION_LENGTH = 10;
const MIN_START = -99;
const MAX_START = 99;
const MIN_STEP = 2;
const MAX_STEP = 20;

const genProgression = (a1, d, length) => {
  const result = [];

  for (let n = 1; n <= length; n += 1) {
    const an = a1 + (n - 1) * d;
    result.push(an);
  }

  return result;
};

const genQuestionAndAnswerPair = () => {
  const start = _.random(MIN_START, MAX_START);
  const step = _.random(MIN_STEP, MAX_STEP);
  const pullIndex = _.random(0, PROGRESSION_LENGTH - 1);

  const progression = genProgression(start, step, PROGRESSION_LENGTH);

  const progressionWithPulledMember = progression.slice();
  progressionWithPulledMember[pullIndex] = '..';

  const question = progressionWithPulledMember.join(' ');
  const answer = progression[pullIndex].toString();

  return [question, answer];
};

const progression = {
  rules: 'What number is missing in the progression?',
  genQuestionAndAnswerPair,
};

export default progression;
