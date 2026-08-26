
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';  

Cypress.Commands.add('preencherEmail', (email) => {
  cy.get('#user').type(email);
})