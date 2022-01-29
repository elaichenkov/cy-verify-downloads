const { join } = require('path');
const { existsSync } = require('fs');

module.exports = (on, config) => {
  on('task', {
    isFileExist: (fileName) => {
      const path = join(config.downloadsFolder, fileName);
      return existsSync(path);
    },
  });
  return config;
};
