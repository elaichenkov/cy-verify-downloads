const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const addCustomCommand = () => {
  Cypress.Commands.add('verifyDownload', (fileName, options) => {
    Cypress.log({
      name: 'verifyDownload',
      message: `Waiting for the ${fileName} file to be exist`,
    });

    const defaultOptions = {
      timeout: 10000,
      interval: 200,
      contains: false,
    };

    const { timeout, interval, contains } = { ...defaultOptions, ...options };

    const downloadsFolder = Cypress.config('downloadsFolder');
    const downloadFileName = path.join(downloadsFolder, fileName);

    let retries = Math.floor(timeout / interval);

    const checkFile = (result) => {
      if (result) return result;

      if (retries < 1) {
        throw new Error(
          `Failed after ${timeout} time out. \nDue to couldn't find ${fileName} file in the ${downloadsFolder} folder`,
        );
      }
      cy.wait(interval, { log: false }).then(() => {
        retries--;
        return resolveValue();
      });
    };

    const resolveValue = () => {
      let result;

      if (contains) {
        result = cy.task('findFiles', { path: downloadsFolder, fileName }).then((files) => {
          if (files !== null) {
            if (files.length > 1)
              cy.log(
                `**WARNING!** More than one file found for the **'${fileName}'** pattern: [${files}] - the first one **[${files[0]}]** will be used`,
              );

            const getTempName = () => `${crypto.randomBytes(8)}-temp-file-name-${crypto.randomBytes(8)}`;

            return cy.task('isFileExist', path.join(downloadsFolder, files[0] || getTempName()));
          }
        });
      } else {
        result = cy.task('isFileExist', downloadFileName);
      }

      return result.then(checkFile);
    };

    return resolveValue().then((isExist) => {
      expect(isExist, `The ${fileName} file has been downloaded successfully`).to.be.true;
    });
  });
};

const isFileExist = (path) => fs.existsSync(path);

const findFiles = ({ path, fileName }) => {
  if (!fs.existsSync(path)) return null;

  return fs.readdirSync(path).filter((file) => file.includes(fileName) && isDownloaded(file));
};

const isDownloaded = (file) => !file.endsWith('.crdownload');

module.exports = {
  // TODO: deprecate these exports in the next major release
  isFileExist,
  findFiles,
  addCustomCommand,
  verifyDownloadTasks: {
    isFileExist,
    findFiles,
  },
};
