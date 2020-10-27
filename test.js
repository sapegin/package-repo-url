const packageRepoUrl = require('./index');

test.each([
	['no package.json', null, ''],
	[
		'repository as a string',
		{ name: 'coffee', repository: 'https://github.com/pizza/coffee' },
		'https://github.com/pizza/coffee',
	],
	[
		'repository as a string with extra slash',
		{ name: 'coffee', repository: 'https://github.com/pizza/coffee/' },
		'https://github.com/pizza/coffee',
	],
	[
		'repository as a shortcut string',
		{ name: 'coffee', repository: 'pizza/coffee' },
		'https://github.com/pizza/coffee',
	],
	[
		'repository as an object',
		{ name: 'coffee', repository: { url: 'pizza/coffee' } },
		'https://github.com/pizza/coffee',
	],
	[
		'repository as an object with Git URL',
		{
			name: 'coffee',
			repository: { url: 'git+https://github.com/pizza/coffee.git' },
		},
		'https://github.com/pizza/coffee',
	],
	[
		'fallback to Git config',
		{
			name: 'coffee',
		},
		'https://github.com/sapegin/coffee',
	],
])('%s', (label, value, expected) => {
	const result = packageRepoUrl(value);
	expect(result).toBe(expected);
});
