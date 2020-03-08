import _ from 'lodash';

import { arithmeticProgression } from '../math.js';

const genRoundData = () => {
  const start = _.random(-99, 99);
  const step = _.random(2, 20);
  const progression = arithmeticProgression(start, step, 10);
  const indexOfPulledMemberInProgression = _.random(progression.length - 1);
  const progressionWithPulledMember = progression.map((n, i) => (i === indexOfPulledMemberInProgression ? '..' : n));

  const question = progressionWithPulledMember.join(' ');
  const answer = progression[indexOfPulledMemberInProgression].toString();

  return [question, answer];
};

const game = {
  description: 'What number is missing in the progression?',
  genRoundData,
};

export default game;
