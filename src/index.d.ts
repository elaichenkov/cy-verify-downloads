// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to verify that file has been downloaded
     * @param fileName - string
     * @param options - { timeout: number, interval: number, contains: boolean }
     * @example
     *  cy.verifyDownload('filename.zip')
     *  cy.verifyDownload('filename.zip', { timeout: 20000, interval: 500 });
     *  cy.verifyDownload('.zip', { contains: true });
     */
    verifyDownload(
      fileName: string,
      options?: { timeout?: number; interval?: number; contains?: boolean }
    ): Chainable<boolean>;
  }
}
