describe('Route Tests', () => {
  it('Navigates to the home/index page', () => {
    cy.visit('http://localhost:3000');
  });
  it('Navigates to the myCourses page', () => {
    cy.visit('http://localhost:3000/myCourses');
  });
  it('Navigates to the announcements page', () => {
    cy.visit('http://localhost:3000/announcements');
  });
  it('Navigates to the resources page', () => {
    cy.visit('http://localhost:3000/resources');
  });
  it('Navigates to the courses page', () => {
    cy.visit('http://localhost:3000/courses');
  });
  it('Navigates to the contact page', () => {
    cy.visit('http://localhost:3000/contact');
  });
  it('Navigates to the about us page', () => {
    cy.visit('http://localhost:3000/aboutUs');
  });
  it('Navigates to the profile page', () => {
    cy.visit('http://localhost:3000/myProfile');
  });
  it('Navigates to the my progress page', () => {
    cy.visit('http://localhost:3000/myProgress');
  });
});

describe('Slug Tests', () => {
  it('Navigates to What is Recovery?', () => {
    cy.visit('http://localhost:3000/courses/whatisrecovery');
    cy.contains('h1', 'What is Recovery?').should('be.visible');
  });
  it('Navigates to Understanding Anxiety', () => {
    cy.visit('http://localhost:3000/courses/understandinganxiety');
    cy.contains('h1', 'Understanding Anxiety').should('be.visible');
  });
  it('Navigates to Understanding Substance Misuse', () => {
    cy.visit('http://localhost:3000/courses/understandingsubstancemisuse');
    cy.contains('h1', 'Understanding Substance Misuse').should('be.visible');
  });
  it('Navigates to Understanding Dementia', () => {
    cy.visit('http://localhost:3000/courses/understandingdementia');
    cy.contains('h1', 'Understanding Dementia').should('be.visible');
  });
  it('Navigates to Skills for Life', () => {
    cy.visit('http://localhost:3000/courses/skillsforlife');
    cy.contains('h1', 'Skills for Life').should('be.visible');
  });
  it('Navigates to Living with Personality Disorder', () => {
    cy.visit('http://localhost:3000/courses/livingwithpersonalitydisorder');
    cy.contains('h1', 'Living with Personality Disorder').should('be.visible');
  });
});

describe('Static and In Progress Tests', () => {
  it('Displays sign up page for non-authenticated users', () => {
    cy.visit('http://localhost:3000');
    cy.contains('p').should(
      'be.visible',
      'Enter your email for a sign in link below'
    );
  });
  it('Displays contact for non-authenticated users', () => {
    cy.visit('http://localhost:3000/contact');
    cy.contains('span', '023 8017 9049').should('be.visible');
  });
  it('Displays about us for non-authenticated users', () => {
    cy.visit('http://localhost:3000/aboutUs');
    cy.contains('div', 'Our vision').should('be.visible');
  });
  it('Displays resources for non-authenticated users', () => {
    cy.visit('http://localhost:3000/resources');
    cy.contains('p', 'Coming soon').should('be.visible');
  });
});
