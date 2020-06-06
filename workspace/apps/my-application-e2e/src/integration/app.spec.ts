import { getGreeting } from '../support/app.po';

describe('my-application', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to my-application!');
  });
});
