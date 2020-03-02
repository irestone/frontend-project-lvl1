#!/usr/bin/env node

import { greet, playEven } from '../src/index.js';

const playerName = greet();

playEven(playerName);
