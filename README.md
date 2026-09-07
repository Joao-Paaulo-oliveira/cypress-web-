# 🧪 Automação E2E com Cypress - Web

Projeto de testes automatizados ponta a ponta (E2E) desenvolvido em Cypress para aplicações Web, com cobertura de cenários de cadastro, login e checkout. A arquitetura foi estruturada utilizando boas práticas de automação: **Page Object Model (POM)**, **Custom Commands**, geração de dados com **Faker**, dados estáticos via **Fixtures** e validação de **Responsividade (Multi-viewports)**.

---

## 🚀 Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/)** — Framework de automação de testes E2E
* **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** — Linguagem base do projeto
* **[@faker-js/faker](https://fakerjs.dev/)** — Geração dinâmica de dados de teste
* **Node.js & npm** — Ambiente de execução e gerenciamento de dependências

---

## 🏛️ Padrões e Estratégia de Testes

* **Page Objects (POM):** Ações e seletores isolados na pasta `support/pages/` para evitar duplicidade de código.
* **Custom Commands:** Comandos customizados em `support/commands.js` e `support/login_commands.js`.
* **Massa Dinâmica:** Dados gerados via Faker para testes de cadastro e validações de input.
* **Massa Estática:** Dados fixos em formato JSON em `fixtures/login.json`.
* **Testes de Responsividade:** Execuções iterativas baseadas no utilitário `support/utils/viewports.js`:
  * **Desktop:** 1920x1080
  * **Tablet:** 768x1024
  * **Mobile:** 375x667

---

## 📁 Estrutura do Projeto

```text
cypress-web/
├── .gitignore
├── cypress.config.js
├── package.json
├── README.md
├── docs/
│   ├── cenarios-de-teste.md
│   └── especificacao-bdd.md
│
└── cypress/
    ├── e2e/
    │   ├── cadastro_usuario.cy.js
    │   ├── checkout.cy.js
    │   ├── comandos_basicos.cy.js
    │   └── login.cy.js
    ├── fixtures/
    │   └── login.json
    └── support/
        ├── pages/
        │   ├── cadastro_usuario_pages.js
        │   ├── checkout_pages.js
        │   └── login_pages.js
        ├── utils/
        │   └── viewports.js
        ├── commands.js
        ├── login_commands.js
        └── e2e.js
```

---

## 📋 Documentação e Especificação de Testes

* 👉 **[Mapeamento de Casos e Cenários](docs/cenarios-de-teste.md):** Tabela técnica detalhada com IDs (`CT-*`), tipos de teste (positivo, negativo, BVA), dados de entrada e oráculos de asserção para os 16 cenários e 28 execuções.
* 👉 **[Especificação BDD / Gherkin](docs/especificacao-bdd.md):** Especificação formal em formato de negócio declarativo (`Dado / Quando / Então` e `Esquema do Cenário`) para as funcionalidades de Login, Cadastro e Checkout, com rastreabilidade direta para a automação.

---

## ⚙️ Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [Git](https://git-scm.com/)

---

## 📦 Instalação

```bash
git clone https://github.com/Joao-Paaulo-oliveira/cypress-web-.git
cd cypress-web-
npm install
```

---

## 🧪 Execução dos Testes

**Modo Interativo (Cypress Test Runner):**
```bash
npx cypress open
```

**Modo Headless (Terminal):**
```bash
npx cypress run
```

**Executar arquivo específico:**
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```