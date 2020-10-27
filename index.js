const gitUsername = require('git-username');

const trimSlash = (url) => url.replace(/\/$/, '');

module.exports = (pkg = require('./package.json')) => {
	if (!pkg) {
		return '';
	}

	const url = (pkg.repository && pkg.repository.url) || pkg.repository;

	if (url) {
		return trimSlash(
			url.startsWith('https:') ? url : `https://github.com/${url}`
		);
	}

	const gitUser = gitUsername();

	if (!gitUser || pkg.name) {
		return '';
	}

	return `https://github.com/${gitUser}/${pkg.name}`;
};
