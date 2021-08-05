# cy-verify-downloads

## Installation

```shell
npm i -D cy-verify-downloads
```

## Usage

cy-verify-downloads extends Cypress' cy command.

So, you need to add this line to your project's `cypress/support/commands.js`:

```javascript
require('cy-verify-downloads).addCustomCommand();
```


And add the following lines to your project's `cypress/plugins/index.js`:


```javascript
const { isFileExist } = require('cy-verify-downloads');

module.exports = (on, config) => {
    on('task', {
        isFileExist
    })
}
```
Then, in your test, you can use it like this:

```javascript
cy.verifyDownload('picture.png');

// or increase timeout
cy.verifyDownload('archive.png', { timeout: 25000 });

// or increase timeout and interval pooling
cy.verifyDownload('archive.png', { timeout: 25000, interval: 600 });
```

## Types

![Autocompletion](./assets/autocompletion.gif?raw=true)

To enable IntelliSense information and autocomplete you have to include types in the `tsconfig.json` file:
```json
{
  "compilerOptions": {
    "types": ["cypress", "cy-verify-downloads"];
  }
}
```

## Author
Yevhen Laichenkov <elaichenkov@gmail.com>

## License
[MIT](LICENSE)