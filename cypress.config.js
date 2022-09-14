const { defineConfig } = require('cypress');
const { verifyDownloadTasks } = require('./src/index');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
    baseUrl: 'http://localhost:8039',
  },
});
