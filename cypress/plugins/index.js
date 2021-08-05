const { isFileExist } = require('../../src/is-file-exist.plugin');

module.exports = (on, config) => {
  on('task', { isFileExist })
}
