
Cypress.Commands.add('preencheCampo', (selector, info) => {
  cy.get(selector)
    .should('be.visible')
    .clear()
    .type(info);
});
