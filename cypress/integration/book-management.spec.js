/// <reference types="cypress" />

import { registerUser } from './test-utils'

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