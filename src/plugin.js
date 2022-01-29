const { join } = require('path');
const { existsSync, readdirSync, rmSync } = require('fs');

module.exports = (on, config) => {
  on('task', {
    isFileExist: (fileName) => {
      const path = join(config.downloadsFolder, fileName);
      return existsSync(path);
    },
    removeDownloads: () => {
      try {
        readdirSync(config.downloadsFolder).forEach(file => rmSync(`${config.downloadsFolder}/${file}`));
        const filenames = readdirSync(config.downloadsFolder, { withFileTypes: true });
        console.log(filenames);
        return filenames.length;
      } catch (e) {
        console.log(e);
        return JSON.stringify(e);
      }
    },
  });
  return config;
};
