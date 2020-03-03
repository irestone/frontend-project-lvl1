#!/usr/bin/env node

import { greet, play } from '../src/index.js';
import gcd from '../src/games/gcd.js';

const player = greet();
play(gcd, player);
