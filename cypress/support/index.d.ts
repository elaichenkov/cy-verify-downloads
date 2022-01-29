// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to verify that pdf file has been downloaded
     * @param fileName - string
     * @param options - { timeout: number, interval: number }
     * @example
     *  cy.verifyDownload('filename.pdf')
     *  cy.verifyDownload('filename.pdf', { timeout: 20000, interval: 500});
     */
    verifyPdfDownload(fileName: string, options?: { timeout: number; interval: number}): Chainable<boolean>
  }
}
