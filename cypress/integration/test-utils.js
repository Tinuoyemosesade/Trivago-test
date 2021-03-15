export const username = 'MrMo';
export const password = 'adetinuoye8587';

export function registerUser() {
  // user should be able to click "register" button 
  cy.get("button:last-child").click();

  cy.get("#username").type(username); // user should be able to choose a username

  cy.get("#password").type(password);

  cy.get("button[type=submit]").click()
}

export function login() {
  // user should be able to click "register" button 
  cy.get("button:first-child").click();

  cy.get("#username").type(username); // user should be able to choose a username

  cy.get("#password").type(password);

  cy.get("button[type=submit]").click()
}

export function logout() {
  cy.get('.css-18dcnxc').click(); // would add a data-cy here, .css-18dcnxc looks like a class name that will change
  cy.get('h1').should('contain', 'My Library');
}