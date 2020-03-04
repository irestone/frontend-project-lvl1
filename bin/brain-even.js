#!/usr/bin/env node

import { greet } from '../src/index.js';
import { run } from '../src/engine.js';
import even from '../src/games/even.js';

const player = greet();

run(even, player);
