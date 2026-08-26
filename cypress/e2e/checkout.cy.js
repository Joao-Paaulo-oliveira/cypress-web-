/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Checkout", () => {
  beforeEach(() => {
    cy.visit("/checkout-one");
  });

  it("Preencher formulário de checkout", () => {
    cy.visit("/checkout-one");
    cy.get("#fname").type(faker.person.firstName());
    cy.get("#lname").type(faker.person.lastName());
    cy.get("#cname").type(faker.company.name());
    cy.get("#email").type(faker.internet.email());
    cy.get("#country").select(1);
    cy.get("#city").select(2);
    cy.get("#zip").type(faker.location.zipCode());
    cy.get("#faddress").type(faker.location.streetAddress());
    cy.get("#messages").type(faker.lorem.sentence());
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    cy.get(":nth-child(2) > h3")
      .should("have.text", "Billings Information registred with success!")
      .should("be.visible");

    cy.get('#headingTwo > .collapsed > [name="payment"]').check();

    cy.get(".order_review.bg-white button").click();

    cy.get("h2")
      .should(
        "have.text",
        "Order success!",
        "Congrats! Your order was created with sucess!",
      )
      .should("be.visible");
  });
});
