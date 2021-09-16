#!/usr/bin/env node

import fs from 'fs';
import eol from 'eol';
import chalk from 'chalk';
import yeow from 'yeow';

const args = yeow({
  file: {
    type: 'file',
    extensions: '.css',
    required: true,
    missing: 'a file must be passed',
    invalid: 'not a .css file'
  }
});

let source;
try {
  source = eol.lf(fs.readFileSync(args.file, { encoding: 'utf-8' }));
} catch (e) {
  console.log(chalk`{red error:} file not found`);
  process.exit(1);
}

const rules = source.match(/(\w| )+{.+?}/gs);
for (const rule of rules) {
  const props = rule.split('\n')
    .map(line => line.trim())
    .filter(line => line.match(/^[^/*]+?:[^;]+?;?$/))
    .map(prop => prop.slice(0, prop.indexOf(':')));
  console.log(props);
}
