const { isFileExist } = require('../../src/index');

module.exports = (on, config) => {
  on('task', { isFileExist })
}
