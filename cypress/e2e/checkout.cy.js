/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import {
  acessarCheckout,
  preencherDadosCobranca,
  validarMensagemCobranca,
  selecionarFormaPagamento,
  confirmarPedido,
  validarSucessoPedido,
} from "../support/pages/checkout_pages";

describe("Checkout", () => {
  beforeEach(() => {
    acessarCheckout();
  });

  it("Preencher formulário de checkout", () => {
    const dadosCobranca = {
      nome: faker.person.firstName(),
      sobrenome: faker.person.lastName(),
      empresa: faker.company.name(),
      email: faker.internet.email(),
      paisIndex: 1,
      cidadeIndex: 2,
      cep: faker.location.zipCode(),
      endereco: faker.location.streetAddress(),
      mensagem: faker.lorem.sentence(),
    };

    preencherDadosCobranca(dadosCobranca);
    validarMensagemCobranca("Billings Information registred with success!");
    selecionarFormaPagamento("JavaScript");
    confirmarPedido();
    validarSucessoPedido(
      "Order success!",
      "Congrats! Your order was created with sucess!",
    );
  });
});
