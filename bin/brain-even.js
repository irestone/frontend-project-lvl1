#!/usr/bin/env node

import { greet, play } from '../src/index.js';
import even from '../src/games/even.js';

const player = greet();
play(even, player);
