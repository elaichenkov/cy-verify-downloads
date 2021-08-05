const { existsSync } = require('fs');

function isFileExist(path) {
    return existsSync(path);
}

module.exports = {
  isFileExist,
}