/// <reference types="cypress" />
import { faker } from '@faker-js/faker';   
import { acessarCadastro, preencherNome, preencherEmail, preencherSenha, cadastrar,  validarMensagem } from '../support/pages/cadastro_usuario_pages';

describe(`Cadastro de usuário`, () => {

    it(`Cadastro de usuário com sucesso`, () => {
        acessarCadastro();
        preencherNome(faker.person.fullName())
        preencherEmail(faker.internet.email())
        preencherSenha(faker.internet.password(6))
        cadastrar()

        validarMensagem('Cadastro realizado!')
  
 });

  it(`Cadastro com email inválido`, () => {
    acessarCadastro();
    preencherNome(faker.person.fullName());
    preencherEmail(faker.internet.password(6));
    preencherSenha(faker.internet.password(6));
    cadastrar();

    validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  it(`Cadastro sem senha`, () => {
    acessarCadastro();
    preencherNome(faker.person.fullName());
    preencherEmail(faker.internet.email());
    cadastrar();

    validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
  });


});