[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://vshymanskyy.github.io/StandWithUkraine)

# cy-verify-downloads ![tests](https://github.com/elaichenkov/cy-verify-downloads/actions/workflows/test.yml/badge.svg) [![Total npm downloads](https://img.shields.io/npm/dt/cy-verify-downloads.svg)](https://www.npmjs.com/package/cy-verify-downloads)

This is a Cypress custom command to wait and to verify that a file has been successfully downloaded.

## Installation

```shell
npm i -D cy-verify-downloads
```

## Usage

cy-verify-downloads extends Cypress' cy command.

So, you need to add this line to your project's `cypress/support/commands.js`:

```javascript
require('cy-verify-downloads').addCustomCommand();
```

And add the following lines to your project's `cypress/plugins/index.js`:

```javascript
const { isFileExist, findFiles } = require('cy-verify-downloads');

module.exports = (on, config) => {
  on('task', { isFileExist, findFiles })
}
```

Then, in your test, you can use it like this:

```javascript
cy.verifyDownload('picture.png');

// verify download by file extension or partial filename
cy.verifyDownload('.png', { contains: true });
cy.verifyDownload('pic', { contains: true });

// or increase timeout
cy.verifyDownload('archive.zip', { timeout: 25000 });

// or increase timeout and interval pooling
cy.verifyDownload('archive.zip', { timeout: 25000, interval: 600 });
```

## Types

![Autocompletion](./assets/autocompletion.gif?raw=true)

To enable IntelliSense information and autocomplete you have to include types in the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "types": ["cypress", "cy-verify-downloads"]
  }
}
```

## Author

Yevhen Laichenkov <elaichenkov@gmail.com>

## License

[MIT](LICENSE)
