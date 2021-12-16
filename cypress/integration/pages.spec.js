describe('Route Tests', () => {
  it('Navigates to the home/index page', () => {
    cy.visit('/');
  });
  it('Navigates to the myCourses page', () => {
    cy.visit('/myCourses');
  });
  it('Navigates to the announcements page', () => {
    cy.visit('/announcements');
  });
  it('Navigates to the resources page', () => {
    cy.visit('/resources');
  });
  it('Navigates to the courses page', () => {
    cy.visit('/courses');
  });
  it('Navigates to the contact page', () => {
    cy.visit('/contact');
  });
  it('Navigates to the about us page', () => {
    cy.visit('/aboutUs');
  });
  it('Navigates to the profile page', () => {
    cy.visit('/myProfile');
  });
  it('Navigates to the my progress page', () => {
    cy.visit('/myProgress');
  });
});

describe('Slug Tests', () => {
  it('Navigates to What is Recovery?', () => {
    cy.visit('/courses/whatisrecovery');
    cy.contains('h1', 'What is Recovery?').should('be.visible');
  });
  it('Navigates to Understanding Anxiety', () => {
    cy.visit('/courses/understandinganxiety');
    cy.contains('h1', 'Understanding Anxiety').should('be.visible');
  });
  it('Navigates to Understanding Substance Misuse', () => {
    cy.visit('/courses/understandingsubstancemisuse');
    cy.contains('h1', 'Understanding Substance Misuse').should('be.visible');
  });
  it('Navigates to Understanding Dementia', () => {
    cy.visit('/courses/understandingdementia');
    cy.contains('h1', 'Understanding Dementia').should('be.visible');
  });
  it('Navigates to Skills for Life', () => {
    cy.visit('/courses/skillsforlife');
    cy.contains('h1', 'Skills for Life').should('be.visible');
  });
  it('Navigates to Living with Personality Disorder', () => {
    cy.visit('/courses/livingwithpersonalitydisorder');
    cy.contains('h1', 'Living with Personality Disorder').should('be.visible');
  });
});

describe('Static and In Progress Tests', () => {
  it('Displays sign up page for non-authenticated users', () => {
    cy.visit('/');
    cy.contains('p').should(
      'be.visible',
      'Enter your email for a sign in link below'
    );
  });
  it('Displays contact for non-authenticated users', () => {
    cy.visit('/contact');
    cy.contains('span', '023 8017 9049').should('be.visible');
  });
  it('Displays about us for non-authenticated users', () => {
    cy.visit('/aboutUs');
    cy.contains('div', 'Our vision').should('be.visible');
  });
  it('Displays resources for non-authenticated users', () => {
    cy.visit('/resources');
    cy.contains('p', 'Coming soon').should('be.visible');
  });
});
