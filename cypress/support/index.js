require('../../src');

Cypress.Commands.add('verifyPdfDownload',
  (fileName, options) => {
    const exportPdfButton = cy.get('[data-cy="pdf"]');
    exportPdfButton.should('exist');
    exportPdfButton.click();
    cy.verifyDownload(fileName, options);
  }
);
