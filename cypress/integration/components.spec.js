describe('Hamburger Test', () => {
  it('Shows navbar when hamburger is clicked', () => {
    cy.visit('http://localhost:3000/contact');
    cy.get('svg').first().click();
  });
  it('Closes the hamburger when close button clicked', () => {
    cy.visit('http://localhost:3000/contact');
    cy.get('svg').first().click();
    cy.get('a').contains('About Us').should('be.visible');
    cy.get('section').get('svg').first().click();
  });
  it('Navigates to and from pages', () => {
    cy.visit('http://localhost:3000/resources');
    cy.get('svg').first().click();
    cy.get('a').contains('About Us').click();
    cy.url().should('include', '/aboutUs');
    cy.get('svg').first().click();
    cy.get('a').contains('Resources').click();
    cy.url().should('include', '/resources');
  });
});

describe('Go Back Button Test', () => {
  it('Navigates from resources to about us and back with Back Button', () => {
    cy.visit('http://localhost:3000/resources');
    cy.get('svg').first().click();
    cy.get('a').contains('About Us').click();
    cy.url().should('include', '/aboutUs');
    cy.contains('button', 'Go Back').click();
    cy.url().should('include', '/resources');
  });
});
