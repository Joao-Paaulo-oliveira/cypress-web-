
#  Automação E2E com Cypress - Web

Projeto de testes automatizados ponta a ponta (E2E) desenvolvido com Cypress, focado na validação de fluxos Web (login, cadastro e checkout), com suporte a testes de responsividade em múltiplos viewports e arquitetura Page Objects.

---

##  Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/)** — Framework de automação de testes E2E
* **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** — Linguagem base do projeto
* **[@faker-js/faker](https://fakerjs.dev/)** — Geração dinâmica de massa de dados
* **Node.js & npm** — Ambiente de execução e gerenciamento de dependências

---

## 📁 Estrutura do Projeto

```text
cypress-web/
├── cypress/
│   ├── e2e/                     # Especificações de testes (.cy.js)
│   │   ├── cadastro_usuario.cy.js
│   │   ├── checkout.cy.js
│   │   └── login.cy.js
│   ├── fixtures/                # Massa de dados estática (JSON)
│   └── support/
│       ├── pages/               # Padrão Page Objects (funções e ações)
│       ├── utils/               # Helpers compartilhados (viewports/telas)
│       ├── commands.js          # Custom Commands do Cypress
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
