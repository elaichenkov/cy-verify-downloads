const addCustomCommand = () => {
  Cypress.Commands.add('verifyDownload', (fileName, options) => {
    Cypress.log({
      name: 'verifyDownload',
      message: `Waiting for the ${fileName} file to be exist`,
    });

    const defaultOptions = {
      timeout: 10000,
      interval: 200
    };

    const { timeout, interval } = { ...defaultOptions, ...options };

    const downloadsFolder = Cypress.config('downloadsFolder')

    let retries = Math.floor(timeout / interval);

    const checkFile = (result) => {
      if (result) return result;

      if (retries < 1) {
        throw new Error(`Failed after ${timeout} time out. \nDue to couldn't find ${fileName} file in the ${downloadsFolder} folder`);
      }
      cy.wait(interval, { log: false }).then(() => {
        retries--
        return resolveValue();
      })
    }

    const resolveValue = () => {
      const result = cy.task('isFileExist', fileName);

      return result.then(checkFile)
    }

    return resolveValue().then(isExist => {
      expect(isExist, `The ${fileName} file has been downloaded successfully`).to.be.true;
    })
  })
};

module.exports = {
  addCustomCommand
}
