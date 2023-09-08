describe('verify download functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('downloads small file', () => {
    cy.get('[data-cy="small"]').click();

    cy.verifyDownload('small-file-10MB.zip');
  });

  it('downloads large file', () => {
    cy.get('[data-cy="large"]').click();

    cy.verifyDownload('large-file-100MB.zip', { timeout: 55000, interval: 500 });
  });

  it('downloads with contains option', () => {
    cy.exec(`rm -rf ${Cypress.config('downloadsFolder')}`);
    cy.get('[data-cy="large"]').click();

    cy.verifyDownload('large-file-100MB', { contains: true });
  });

  it('downloads file with extension and contains option', () => {
    cy.exec(`rm -rf ${Cypress.config('downloadsFolder')}`);
    cy.get('[data-cy="large"]').click();

    cy.verifyDownload('large-file-100MB.zip', { contains: true });
  });
});
