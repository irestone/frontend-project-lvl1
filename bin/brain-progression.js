#!/usr/bin/env node

import { greet, play } from '../src/index.js';
import progression from '../src/games/progression.js';

const player = greet();
play(progression, player);
