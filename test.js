import test from 'ava';
import recipes from './index.js';

test('title', t => {
	t.throws(() => {
		recipes(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(recipes('unicorns'), 'unicorns & rainbows');
});
