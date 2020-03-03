#!/usr/bin/env node

import { greet, play } from '../src/index.js';
import prime from '../src/games/prime.js';

const player = greet();
play(prime, player);
