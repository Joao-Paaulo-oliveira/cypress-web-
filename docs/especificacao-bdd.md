# 🥒 Especificação BDD / Gherkin — Cypress Web

Este documento formaliza os comportamentos e regras de negócio da aplicação utilizando a sintaxe **Gherkin Declarativo**, servindo como documentação viva (*Living Documentation*) e ponte de comunicação entre Produto, QA e Desenvolvimento.

---

## 1. Princípios de Escrita Adotados

* **Foco no Negócio:** Os passos descrevem a intenção do usuário e o valor esperado, repudiando passos mecânicos de tela (como clicar em IDs ou seletores CSS).
* **Independência de Interface:** Os cenários permanecem válidos mesmo se o design visual da aplicação for refatorado.
* **Rastreabilidade Direta:** Cada cenário Gherkin possui equivalência direta com a suíte automatizada em Cypress.

---

## 2. Funcionalidade: Autenticação de Usuário (Login)

**Como** um usuário cadastrado na loja  
**Quero** me autenticar com meu e-mail e senha  
**Para que** eu possa acessar meu painel de pedidos e gerenciar minha conta  

**Contexto:**
  **Dado** que estou na página de login da loja virtual

---

### Cenário: Autenticação realizada com sucesso
  **Quando** submeto credenciais válidas cadastradas no sistema  
  **Então** devo ser autenticado com sucesso  
  **E** devo visualizar a confirmação "Login realizado" na tela  

---

### Esquema do Cenário: Tentativa de autenticação com dados obrigatórios ausentes
  **Quando** submeto o e-mail "<email>" e a senha "<senha>"  
  **Então** o sistema deve recusar a autenticação  
  **E** deve apresentar a mensagem de alerta "<mensagem_alerta>"  

  **Exemplos:**
    | email             | senha     | mensagem_alerta   | motivo                   |
    |                   | 123456    | E-mail inválido.  | E-mail não preenchido    |
    | cliente@teste.com |           | Senha inválida.   | Senha não preenchida     |

---

### Cenário: Tentativa de autenticação com formato de e-mail malformado
  **Quando** submeto a autenticação com um e-mail em formato inválido  
  **Então** o sistema deve bloquear o envio  
  **E** deve exibir a mensagem "E-mail inválido."  

---

### Cenário: Tentativa de autenticação com senha curta (Partição de Equivalência)
  **Quando** submeto a autenticação com uma senha curta  
  **Então** o sistema deve recusar a autenticação  
  **E** deve exibir a mensagem "Senha inválida."  

---

### Cenário: Navegação para o fluxo de cadastro a partir da tela de login
  **Quando** seleciono a opção para criar uma nova conta  
  **Então** devo ser direcionado para o formulário de cadastro de usuário  

---

## 3. Funcionalidade: Cadastro de Novos Usuários

**Como** um novo cliente  
**Quero** registrar meu cadastro informando meus dados básicos  
**Para que** eu possa realizar compras e usufruir dos serviços da loja  

**Contexto:**
  **Dado** que estou na página de cadastro de usuários

---

### Cenário: Cadastro de cliente realizado com sucesso
  **Quando** preencho o formulário com nome completo, e-mail único e senha válida de 6 caracteres  
  **E** confirmo a solicitação de registro  
  **Então** minha conta deve ser criada com sucesso  
  **E** devo visualizar a notificação "Cadastro realizado!"  

---

### Cenário: Tentativa de cadastro com e-mail em formato inválido
  **Quando** tento me cadastrar com um e-mail que não segue o padrão estrutural com "@"  
  **Então** o sistema deve impedir a criação do registro  
  **E** deve informar "O campo e-mail deve ser prenchido corretamente"  

---

### Cenário: Tentativa de cadastro sem fornecimento de senha
  **Quando** tento me cadastrar fornecendo nome e e-mail, mas deixando a senha em branco  
  **Então** o sistema deve exigir a obrigatoriedade da senha  
  **E** deve informar "O campo senha deve ter pelo menos 6 dígitos"  

---

## 4. Funcionalidade: Finalização de Compra (Checkout)

**Como** um comprador com produtos selecionados no carrinho  
**Quero** preencher minhas informações de cobrança e escolher o método de pagamento  
**Para que** eu possa concluir meu pedido com segurança  

**Contexto:**
  **Dado** que estou na etapa de checkout do pedido

---

### Cenário: Conclusão de pedido com pagamento via Mobile Banking com sucesso
  **Quando** finalizo o pedido com dados de cobrança válidos e pagamento via "Mobile Banking"  
  **Então** as informações de cobrança devem ser registradas com sucesso  
  **E** devo visualizar a confirmação do pedido contendo:  
    | Elemento | Mensagem Esperada                              |  
    | Título   | Order success!                                 |  
    | Detalhe  | Congrats! Your order was created with sucess!  |  

---

## 5. Matriz de Rastreabilidade (Gherkin ↔ Automação Cypress)

| Cenário Gherkin | Arquivo de Teste Cypress | Page Object / Métodos Utilizados |
| :--- | :--- | :--- |
| **Autenticação com sucesso** | `cypress/e2e/login.cy.js` | `login_pages.js` (`preencherEmail`, `preencherSenha`, `clicarLogin`, `validarMensagem`) |
| **Dados obrigatórios ausentes** | `cypress/e2e/login.cy.js` | `login_pages.js` (`preencherSenha` / `preencherEmail`, `clicarLogin`, `validarMensagem`) |
| **E-mail malformado** | `cypress/e2e/login.cy.js` | `login_pages.js` (`preencherEmail`, `preencherSenha`, `clicarLogin`, `validarMensagem`) |
| **Tentativa com senha curta** | `cypress/e2e/login.cy.js` | `login_pages.js` (`preencherEmail`, `preencherSenha`, `clicarLogin`, `validarMensagem`) |
| **Navegação para cadastro** | `cypress/e2e/login.cy.js` | `login_pages.js` (`clicarCriarConta`, `validarMensagem`) |
| **Cadastro com sucesso** | `cypress/e2e/cadastro_usuario.cy.js` | `cadastro_usuario_pages.js` (`preencherNome`, `preencherEmail`, `preencherSenha`, `cadastrar`, `validarMensagem`) |
| **Cadastro com e-mail inválido** | `cypress/e2e/cadastro_usuario.cy.js` | `cadastro_usuario_pages.js` (`preencherNome`, `preencherEmail`, `preencherSenha`, `cadastrar`, `validarMensagem`) |
| **Cadastro sem senha** | `cypress/e2e/cadastro_usuario.cy.js` | `cadastro_usuario_pages.js` (`preencherNome`, `preencherEmail`, `cadastrar`, `validarMensagem`) |
| **Checkout com Mobile Banking** | `cypress/e2e/checkout.cy.js` | `checkout_pages.js` (`preencherDadosCobranca`, `confirmarPedido`, `validarSucessoPedido`) |
