
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { 
  acessarLogin, 
  preencherEmail, 
  preencherSenha, 
  clicarLogin, 
  validarMensagem, 
  clicarCriarConta 
} from '../support/pages/login_pages';
import { telas } from '../support/utils/viewports';

telas.forEach((tela) => {
  describe(`Login - ${tela.dispositivo}`, () => {
    
    beforeEach(() => {
      cy.viewport(tela.largura, tela.altura);
      acessarLogin();
    });

    it(`Login com sucesso - ${tela.dispositivo}`, () => {
      preencherEmail(faker.internet.email());
      preencherSenha(faker.string.numeric(6));
      clicarLogin();
      validarMensagem('Login realizado');
    });

    it(`Login e-mail vazio - ${tela.dispositivo}`, () => {
      preencherSenha(faker.string.numeric(6));
      clicarLogin();
      validarMensagem('E-mail inválido.');
    });

    it(`Login senha vazia - ${tela.dispositivo}`, () => {
      preencherEmail(faker.internet.email());
      clicarLogin();
      validarMensagem('Senha inválida.');
    });

    it(`Login e-mail inválido - ${tela.dispositivo}`, () => {
      preencherEmail('email_invalido');
      preencherSenha(faker.string.numeric(6));
      clicarLogin();
      validarMensagem('E-mail inválido.');
    });

    it(`Login senha inválida - ${tela.dispositivo}`, () => {
      preencherEmail(faker.internet.email());
      preencherSenha(faker.string.numeric(3));
      clicarLogin();
      validarMensagem('Senha inválida.');
    });

    it(`Botão ainda não tem conta - ${tela.dispositivo}`, () => {
      clicarCriarConta();
      validarMensagem('Cadastro de usuário');
    });

  }); // Fechamento do describe
}); // Fechamento  do forEach