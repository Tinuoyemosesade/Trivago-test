/// <reference types="cypress" />

const username = 'MrMo';
const password = 'adetinuoye8587';

function registerUser() {
  // user should be able to click "register" button 
  cy.get("button:last-child").click();

  cy.get("#username").type(username); // user should be able to choose a username

  cy.get("#password").type(password);

  cy.get("button[type=submit]").click()
}

function login() {
  // user should be able to click "register" button 
  cy.get("button:first-child").click();

  cy.get("#username").type(username); // user should be able to choose a username

  cy.get("#password").type(password);

  cy.get("button[type=submit]").click()
}

function logout() {
  cy.get('.css-18dcnxc').click();
  cy.get('h1').should('contain', 'My Library');
}

describe("Registration flow", function () {
  beforeEach(() => {
    cy.visit("https://ts-e2e-challenge.netlify.app/list"); // step one, user should be able to visit the url
  });

  it("should be able to register a new user", function () {
    registerUser();

    cy.get('#root li').should('have.length', 3);
    cy.contains('Logout').should('exist');
    cy.get('div#root > div:first-child').should('contain', username);
  });


  it("should not allow an existing user to register", function () {
    registerUser();
    logout();

    registerUser();
    cy.get('div[role = "alert"]').should('have.text', `There was an error: Cannot create a new user with the username "${username}"`);
  });

  it("should let existing users login", function () {
    registerUser();
    logout();

    login();
    cy.get('#root li').should('have.length', 3);
    cy.contains('Logout').should('exist');
    cy.get('div#root > div:first-child').should('contain', username);
  });


  it("should not allow a non-registered user to login", function () {
    login();
    cy.get('div[role = "alert"]').should('have.text', `There was an error: Invalid username or password`);
  });
});

describe('Book management', function() {

  beforeEach(() => {
    cy.visit("https://ts-e2e-challenge.netlify.app/list"); // step one, user should be able to visit the url
  });

  it("should be able to add a book", function () {
    registerUser();

    // Go to discover tab
    cy.get('#root li:last-child').click()

    // Click the plus button
    cy.get('li[aria-label = "How to Be an Antiracist"]').find('button[aria-label = "Add to list"]').first().click();

    // Go back to reading list and check that it is present
    cy.get('nav').find('li:first-child').click();
    cy.contains('How to Be an Antiracist');
  });
  
})
