#!/usr/bin/env node

import { greet } from '../src/index.js';
import { run } from '../src/engine.js';
import progression from '../src/games/progression.js';

const player = greet();

run(progression, player);
