describe('Book', () => {
  it('Books onto available class', () => {
    cy.visit('http://localhost:3000/courses/livingwithpersonalitydisorder');
    cy.contains('h1', 'Living with Personality Disorder').should('be.visible');
    cy.contains('button', 'Book').click();
    cy.contains('h3', 'Booking successful').should('be.visible');
    cy.contains('button', 'Got it, thanks!').click();
    cy.contains('button', 'Unbook').should('be.visible');
  });
  it('Book onto full class', () => {
    cy.visit('http://localhost:3000/courses/whatisrecovery');
    cy.contains('h1', 'What is Recovery?').should('be.visible');
    cy.contains('button', 'Book').click();
    cy.contains('h3', 'Class Unavailable').should('be.visible');
    cy.contains('button', '↩ Back').click();
    cy.url().should('eq', 'http://localhost:3000/courses');
  });
});

describe('Unbook', () => {
  it('Unenrol from class', () => {
    cy.visit('http://localhost:3000/courses/livingwithpersonalitydisorder');
    cy.contains('h1', 'Living with Personality Disorder').should('be.visible');
    cy.contains('button', 'Book').click();
    cy.contains('h3', 'Booking successful');
    cy.contains('button', 'Got it, thanks!').click();
    cy.contains('button', 'Unbook').click();
    cy.contains('h3', 'Unenrolled').should('be.visible');
    cy.contains('button', 'Got it, thanks!').click();
  });
});
