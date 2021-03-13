/// <reference types="cypress" />

import { registerUser, username, logout, login } from './test-utils'

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