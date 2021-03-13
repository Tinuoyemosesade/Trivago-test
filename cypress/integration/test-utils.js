export const username = 'MrMo';

export function registerUser() {
  // user should be able to click "register" button 
  cy.get("button:last-child").click();

  cy.get("#username").type(username); // user should be able to choose a username

  cy.get("#password").type("adetinuoye8587");

  cy.get("button[type=submit]").click()
}

export function login() {
  // user should be able to click "register" button 
  cy.get("button:first-child").click();

  cy.get("#username").type(username); // user should be able to choose a username

  cy.get("#password").type("adetinuoye8587");

  cy.get("button[type=submit]").click()
}

export function logout() {
  cy.get('.css-18dcnxc').click();
  cy.get('h1').should('contain', 'My Library');
}