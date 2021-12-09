describe('Example Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

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
});

describe('My Courses Tests', () => {
  it('Shows error message for user with no classes', () => {
    cy.visit('http://localhost:3000/myCourses');
    cy.contains('You are not enrolled in any classes!');
  });
});

describe('Dynamic Course Routes Tests', () => {
  it('Navigates to the Life After Lockdown Page', () => {
    cy.visit('http://localhost:3000/courses');
    cy.get('a')
      .first()
      .click()
      .url()
      .should('eq', 'http://localhost:3000/courses/Life%20After%20Lockdown');
  });
  it('Navigates to the Understanding Depression page', () => {
    cy.visit('http://localhost:3000/courses');
    cy.get('a')
      .should('have.text', 'Understanding Depression')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/courses/Understanding%20Depression');
  });
});

describe('Hamburger Test', () => {
  it('Shows navbar when hamburger is clicked', () => {
    cy.visit('http://localhost:3000/contact');
    cy.get('svg').first().click();
  });
});
