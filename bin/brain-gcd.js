#!/usr/bin/env node

import { greet } from '../src/index.js';
import { run } from '../src/engine.js';
import gcd from '../src/games/gcd.js';

const player = greet();

run(gcd, player);
