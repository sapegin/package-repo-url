const fs = require('fs');
const path = require('path');
const gitUsername = require('git-username');

const trimSlash = (url) => url.replace(/\/$/, '');

const unGitUrl = (url) => url.replace(/^git\+/, '').replace(/.git$/, '');

const getDefaultValue = () => {
	const filename = path.resolve(process.cwd(), 'package.json');
	try {
		return JSON.parse(fs.readFileSync(filename, 'utf8'));
	} catch (err) {
		return undefined;
	}
};

module.exports = (pkg = getDefaultValue()) => {
	if (!pkg) {
		return '';
	}

	const url = (pkg.repository && pkg.repository.url) || pkg.repository;

	if (url) {
		if (url.startsWith('https:')) {
			return trimSlash(url);
		}

		if (url.startsWith('git+')) {
			return unGitUrl(url);
		}

		return trimSlash(`https://github.com/${url}`);
	}

	const gitUser = gitUsername();

	if (!gitUser || !pkg.name) {
		return '';
	}

	return `https://github.com/${gitUser}/${pkg.name}`;
};
