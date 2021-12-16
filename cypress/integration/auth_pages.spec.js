describe('Shows logged in user stuff', () => {
  it('Displays courses for authenticated users', () => {
    cy.visit('http://localhost:3000/courses');
    cy.contains('h1').should('be.visible', 'Upcoming courses');
  });
  it('Displays user profile for authenticated users', () => {
    cy.visit('http://localhost:3000/myProfile');
    cy.contains('h1').should('be.visible', 'My Profile');
  });
  it('Displays user courses for authenticated users', () => {
    cy.visit('http://localhost:3000/myCourses');
    cy.contains('p').should('be visible', 'Hello,');
    cy.contains('h1').should('be.visible', 'My Courses');
  });
});
