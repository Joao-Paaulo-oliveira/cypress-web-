export function acessarLogin() {
  cy.visit("/login");
}

export function preencherEmail(email) {
  cy.preencheCampo("#user", email);
}

export function preencherSenha(senha) {
  cy.preencheCampo("#password", senha);
}

export function clicarLogin() {
  cy.get("#btnLogin").click();
}

export function clicarCriarConta() {
  cy.get("#createAccount").click();
}




export function validarMensagem(textoEsperado) {
  cy.contains(textoEsperado, { timeout: 10000 }).should("be.visible");
}




export function realizarLogin(email, senha) {
  acessarLogin();
  preencherEmail(email);
  preencherSenha(senha);
  clicarLogin();
}
