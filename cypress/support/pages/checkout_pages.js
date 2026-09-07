/// <reference types="cypress" />

export function acessarCheckout() {
  cy.visit('/checkout-one');
}

export function preencherDadosCobranca(dados) {
  cy.get('#fname').type(dados.nome);
  cy.get('#lname').type(dados.sobrenome);
  cy.get('#cname').type(dados.empresa);
  cy.get('#email').type(dados.email);
  cy.get('#country').select(dados.paisIndex || 1);
  cy.get('#city').select(dados.cidadeIndex || 2);
  cy.get('#zip').type(dados.cep);
  cy.get('#faddress').type(dados.endereco);
  cy.get('#messages').type(dados.mensagem);
  cy.get('#materialUnchecked').check();
  cy.get('.checkout-area-bg').contains('button', 'Save').click();
}

export function validarMensagemCobranca(mensagemEsperada = 'Billings Information registred with success!') {
  cy.contains('.check-out-form h3', mensagemEsperada)
    .should('be.visible');
}

export function selecionarFormaPagamento(metodo = 'JavaScript') {
  cy.get(`input[name="payment"][value="${metodo}"]`).check({ force: true });
}

export function confirmarPedido() {
  cy.get('.order_review').contains('button', 'Place Order').click();
}

export function validarSucessoPedido(tituloEsperado = 'Order success!', mensagemEsperada = 'Congrats! Your order was created with sucess!') {
  cy.get('.offer_modal_left h2')
    .should('be.visible')
    .and('have.text', tituloEsperado);

  if (mensagemEsperada) {
    cy.get('.offer_modal_left h3')
      .should('be.visible')
      .and('have.text', mensagemEsperada);
  }
}
