const { defineConfig } = require('cypress');
const { isFileExist, findFiles } = require('./src/index');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { isFileExist, findFiles });
    },
    baseUrl: 'http://localhost:8039',
  },
});
