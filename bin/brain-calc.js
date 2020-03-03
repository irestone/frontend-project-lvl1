#!/usr/bin/env node

import { greet, play } from '../src/index.js';
import calc from '../src/games/calc.js';

const player = greet();
play(calc, player);
