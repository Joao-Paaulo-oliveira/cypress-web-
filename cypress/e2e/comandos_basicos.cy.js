describe("Comandos basicos", () => {
  it("Abrir URL", () => {
    cy.visit("https://www.automationpratice.com.br/");
  });

  it("Encontrar elemento", () => {
    cy.visit("https://www.automationpratice.com.br/login");

    // get() - buscar elemento
    cy.get("#user");

    // find() - buscar elemento dentro de outro elemento
    // diminui o escopo da busca
    cy.get(".mc-form").find(".form-control");

    // contains() - buscar elemento pelo texto
    cy.get('.mc-form').contains('Send Mail');
  
  });

  it("Preencher Campo", () => {
    cy.visit("https://www.automationpratice.com.br/login");
   
    // type() - preencher campo
    cy.get('#user').type('teste@teste.com');
    cy.get('#password').type('123456');

    // rightclick() - clicar com o botão direito do mouse
    cy.get('#btnLogin').rightclick(); 
    // dblclick() - clicar duas vezes no elemento
    cy.get('#user').dblclick();
    // click() - clicar em elemento
    cy.get('#btnLogin').click();
  
  });

 it("Select/Dropdown", () => {
    cy.visit("https://www.automationpratice.com.br/checkout-one");
   
    // select() - selecionar elemento do dropdown
   cy.get('#country').select('usa')

});

 it("Checkbox/Radio", () => {
    cy.visit("https://www.automationpratice.com.br/checkout-one");
   
    // Checkbox
    cy.get('#materialUnchecked').check();
    cy.get('#materialUnchecked').uncheck();

    // Radio
    cy.get('#headingOne > div > [name="payment"]').check()
    cy.get('#headingThree > .collapsed > [name="payment"]').check()

});

it("Validar elementos", () => {
    cy.visit("https://www.automationpratice.com.br/login");

    
     cy.get('#user').type('teste@teste.com')
     cy.get('#password').type('123456')
     cy.get('#btnLogin').click();
   

     // should() - validar elemento
     cy.get('#swal2-title')
       .should('be.visible')
       .should('have.text', 'Login realizado')

});
  });