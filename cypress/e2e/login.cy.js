
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';                                // IMPORTANDO A BIBLIOTECA FAKER PARA GERAR DADOS ALEATÓRIOS

const telas = [{ dispositivo: "Desktop", largura: 1920, altura: 1080 }, // ARRAY COM OS NOMES DAS TELAS PARA TESTE DE RESPONSIVIDADE
               { dispositivo: "Tablet", largura: 768, altura: 1024 },
               { dispositivo: "Mobile", largura: 375, altura: 667 } 
];         

telas.forEach((tela) => {                                               // LOOP PARA EXECUTAR OS TESTES EM CADA TELA DEFINIDA NO ARRAY
    describe(`Login - ${tela.dispositivo}`, () => { 
    
        beforeEach(() => {
        cy.viewport(tela.largura, tela.altura);                         // DEFININDO O TAMANHO DA JANELA DO NAVEGADOR
        cy.visit("/login");                                             // VISITAR A PÁGINA DE LOGIN ANTES DE CADA TESTE
    
   }); 




it(`Login com sucesso - ${tela.dispositivo}`, () => {
   
    cy.preencherEmail(faker.internet.email());
    cy.get('#password').type(faker.string.numeric(6));
    cy.get('#btnLogin').click();
    cy.get('#swal2-title')
     .should("have.text", 'Login realizado')
     .should('be.visible');

});



it(`Login e-mail vazio - ${tela.dispositivo}`, () => {

    cy.get('#password').type(faker.string.numeric(6));
    cy.get('#btnLogin').click();
    cy.get('.invalid_input')
     .should("have.text", 'E-mail inválido.')
     .should('be.visible');
    
});



it(`Login senha vazia - ${tela.dispositivo}`, () => {

    cy.preencherEmail(faker.internet.email());
    cy.get('#btnLogin').click();
    cy.get('.invalid_input')
     .should("have.text", 'Senha inválida.')
     .should('be.visible');
    
});





it(`Login e-mail inválido - ${tela.dispositivo}`, () => {

    cy.preencherEmail('email_invalido');
    cy.get('#password').type(faker.string.numeric(6));
    cy.get('#btnLogin').click();
    cy.get('.invalid_input')
     .should("have.text", 'E-mail inválido.')
     .should('be.visible');
    
});




it(`Login senha inválida - ${tela.dispositivo}`, () => {

    cy.preencherEmail(faker.internet.email());
    cy.get('#password').type(faker.string.numeric(4));
    cy.get('#btnLogin').click();
    cy.get('.invalid_input')
     .should("have.text", 'Senha inválida.')
     .should('be.visible');  

    
})

it(`Botão ainda não tem conta - ${tela.dispositivo}`, () => {

    cy.get('#createAccount').click();
    cy.url().should('eq', 'https://www.automationpratice.com.br/register');
    cy.get('.account_form > h3')
     .should('have.text', 'Cadastro de usuário')
     .should('be.visible');



});


    });
}); 