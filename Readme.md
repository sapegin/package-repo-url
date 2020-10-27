# package-repo-url

Returns GitHub repository URL based on `package.json`.

## Installation

```
npm install package-repo-url
```

## Usage

```js
const packageRepoUrl = require('package-repo-url');

console.log(packageRepoUrl());
// -> https://github.com/sapegin/package-repo-url

console.log(packageRepoUrl(require('./somewhere/package.json')));
// -> https://github.com/shomeorg/somepackage
```

## Changelog

The changelog can be found on the [Releases page](https://github.com/sapegin/package-repo-url/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[Artem Sapegin](https://sapegin.me) and [contributors](https://github.com/sapegin/package-repo-url/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
