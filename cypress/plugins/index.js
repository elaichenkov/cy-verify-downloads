const { isFileExist, findFiles } = require('../../src/index');

module.exports = (on, config) => {
  on('task', { isFileExist, findFiles })
}
