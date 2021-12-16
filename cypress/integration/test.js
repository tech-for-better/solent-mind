// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false;
// });

describe('Example Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

it('Visits baseUrl', () => {
  cy.visit('/');
});

// describe('My Courses Tests', () => {
//   it('Shows error message for user with no classes', () => {
//     cy.visit('http://localhost:3000/myCourses');
//     cy.contains('You are not enrolled in any classes!');
//   });
// });

// describe('Dynamic Course Routes Tests', () => {
//   it('Navigates to the Life After Lockdown Page', () => {
//     cy.visit('http://localhost:3000/courses');
//     cy.contains('a', 'Life After Lockdown')
//       .click()
//       .url()
//       .should('eq', 'http://localhost:3000/courses/Life%20After%20Lockdown');
//     // .should('eq', 'http://localhost:3000/courses/Life%20After%20Lockdown');
//   });
//   it('Navigates to the Understanding Depression page', () => {
//     cy.visit('http://localhost:3000/courses');
//     cy.contains('a', 'Understanding Depression')
//       .click()
//       .url()
//       .should('eq', 'http://localhost:3000/courses/Understanding%20Depression');
//   });
// });
