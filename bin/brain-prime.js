#!/usr/bin/env node

import { greet } from '../src/index.js';
import { run } from '../src/engine.js';
import prime from '../src/games/prime.js';

const player = greet();

run(prime, player);
