#!/usr/bin/env node
import meow from 'meow';
import recipes from './index.js';

const cli = meow(`
	Usage
	  $ recipes [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ recipes
	  unicorns & rainbows
	  $ recipes ponies
	  ponies & rainbows
`, {
	flags: {
		foo: {
			type: 'boolean'
		}
	}
});

console.log(recipes(cli.input[0] || 'unicorns'));
