#!/usr/bin/env node

/*
  cli.js
  linn CLI
  copyright (c) 2021 sporeball
  MIT license
*/

import { order } from './lib/order.js';

import fs from 'fs';
import eol from 'eol';
import chalk from 'chalk';
import yeow from 'yeow';

const args = yeow({
  file: {
    type: 'file',
    extensions: '.css / .scss',
    required: true,
    missing: 'a file must be passed',
    invalid: 'invalid file extension'
  }
});

const RULE_REGEX = /[*\w.#()[\]=~|^$, >+:-]+{[\w\n -]+:.+?}/gs;

let source;
try {
  source = eol.lf(fs.readFileSync(args.file, { encoding: 'utf-8' }));
} catch (e) {
  console.log(chalk`{red error:} file not found`);
  process.exit(1);
}

let changed = [];
let numChanged = 0;

const rules = source.match(RULE_REGEX);
for (const rule of rules) {
  const lines = rule.split('\n');
  const selector = lines[0].slice(0, lines[0].indexOf('{')).trim();
  const decs = lines.filter(line => line.match(/[\w -]+?:[^{;}\n]+;?$/gm));

  let sortedDecs = [...decs].sort((a, b) => {
    a = a.trim();
    b = b.trim();
    // slice to property, and look for it in the order array
    a = order.indexOf(a.slice(0, a.indexOf(':')));
    b = order.indexOf(b.slice(0, b.indexOf(':')));
    // give properties not in the order array a very high value
    if (a === -1) {
      a = 999;
    }
    if (b === -1) {
      b = 999;
    }
    // sort in ascending order
    return a - b;
  });

  sortedDecs = sortedDecs.map(dec => dec.endsWith(';') ? dec : dec + ';');

  const newRule = rule.replace(decs.join('\n'), sortedDecs.join('\n').slice(0, -1));
  if (rule !== newRule) {
    source = source.replace(rule, newRule);
    changed.push(selector);
    numChanged++;
  }
}

changed = changed.map(selector => chalk`    - {cyan ${selector}}`)
  .join('\n');

fs.writeFileSync(args.file, source);
if (numChanged > 0) {
  console.log('linn (https://github.com/sporeball/linn)');
  console.log(chalk`  {green o} reordered ${numChanged} rules:\n${changed}`);
}
