const gitUsername = require('git-username');

const trimSlash = (url) => url.replace(/\/$/, '');

const unGitUrl = (url) => url.replace(/^git\+/, '').replace(/.git$/, '');

module.exports = (pkg = require('./package.json')) => {
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
