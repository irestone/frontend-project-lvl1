#!/usr/bin/env node

import { greet } from '../src/index.js';
import { run } from '../src/engine.js';
import calc from '../src/games/calc.js';

const player = greet();

run(calc, player);
