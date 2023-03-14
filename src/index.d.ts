// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to verify that file has been downloaded
     * @param fileName - string
     * @param options - { timeout: number, interval: number, contains: boolean, notContains: boolean }
     * @example
     *  cy.verifyDownload('filename.zip')
     *  cy.verifyDownload('filename.zip', { timeout: 20000, interval: 500 });
     *  cy.verifyDownload('.zip', { contains: true });
     *  cy.verifyDownload('.zip', { notContains: true });
     */
    verifyDownload(
      fileName: string,
      options?: { timeout?: number; interval?: number; contains?: boolean, notContains?: boolean }
    ): Chainable<boolean>;
  }
}
