


export function acessarCadastro() {
    cy.visit('/register');
}


 export function preencherNome(nome) {
    cy.preencheCampo('#user', nome);
}

export function preencherEmail(email) {
    cy.preencheCampo('#email', email);
}

export function preencherSenha(senha) {
    cy.preencheCampo('#password', senha);
}

export function cadastrar() {
    cy.get('#btnRegister').click();
}

export function validarMensagem(textoEsperado) {
  cy.contains(textoEsperado, { timeout: 10000 })
    .should('be.visible');
}

export function cadastrarUsuario(nome, email, senha) {
    acessarCadastro();
    preencherNome(nome);
    preencherEmail(email);
    preencherSenha(senha);
    cadastrar();
    
}

