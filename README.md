
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
└── package.json


⚙️ Pré-requisitos
Node.js (versão LTS recomendada)

Git

Instalação
Clone o repositório:

git clone [https://github.com/Joao-Paaulo-oliveira/cypress-web-.git](https://github.com/Joao-Paaulo-oliveira/cypress-web-.git)

Acesse a pasta do projeto:

cd cypress-web-

Instale as dependências:

Bash
npm install

Executando os Testes
Modo Interativo (Cypress Test Runner)
Abre a interface visual do Cypress:

Bash
npx cypress open
Modo Headless (Linha de comando)
Executa todos os testes em segundo plano no terminal:

Bash
npx cypress run
📱 Testes de Responsividade
Os testes cobrem execuções em diferentes resoluções centralizadas via utilitário (support/utils/viewports.js):

Desktop: 1920x1080

Tablet: 768x1024

Mobile: 375x667