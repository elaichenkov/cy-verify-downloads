declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
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
        options?: { timeout?: number; interval?: number; contains?: boolean },
      ): Chainable<boolean>;
    }
  }
}

export function addCustomCommand(): void;
export const verifyDownloadTasks: {
  isFileExist: (path: string) => boolean;
  findFiles: ({ path, filename }: { path: string, filename: string }) => string[] | null;
};
