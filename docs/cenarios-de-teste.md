# 📋 Mapeamento de Casos e Cenários de Teste — Cypress Web

Este documento mapeia formalmente todos os casos e cenários de testes automatizados implementados no projeto, detalhando a estratégia de cobertura, pré-condições, dados de entrada e resultados esperados.

---

## 📊 Resumo Executivo da Suíte

* **Arquivos de Especificação (`specs`):** 4
* **Cenários Únicos de Teste:** 16 cenários
* **Total de Execuções em Pipeline:** 28 testes (18 no Login com matriz de viewports + 3 no Cadastro + 1 no Checkout + 6 em Comandos Básicos)
* **Taxa de Sucesso:** 100% nas execuções da suíte local (28/28 passing)

---

## 1. Módulo: Login (`cypress/e2e/login.cy.js`)

Os testes de login utilizam uma estratégia **Cross-Viewport**, executando a mesma matriz de cenários nas resoluções:
* **Desktop:** 1920x1080
* **Tablet:** 768x1024
* **Mobile:** 375x667

| ID | Cenário / Objetivo | Tipo | Dados de Entrada | Resultado Esperado |
| :--- | :--- | :--- | :--- | :--- |
| **CT-LOG-01** | Login com sucesso | Positivo | E-mail dinâmico (`faker`) + Senha de 6 dígitos | Mensagem `"Login realizado"` visível em modal |
| **CT-LOG-02** | Login com e-mail vazio | Negativo | E-mail: `""` + Senha de 6 dígitos | Mensagem `"E-mail inválido."` visível |
| **CT-LOG-03** | Login com senha vazia | Negativo | E-mail dinâmico + Senha: `""` | Mensagem `"Senha inválida."` visível |
| **CT-LOG-04** | Login com e-mail inválido | Negativo | E-mail: `'email_invalido'` (sem `@` e domínio) + Senha de 6 dígitos | Mensagem `"E-mail inválido."` visível |
| **CT-LOG-05** | Login com senha curta (Partição de Equivalência) | Negativo | E-mail dinâmico + Senha de 3 dígitos (partição inválida curta) | Mensagem `"Senha inválida."` visível |
| **CT-LOG-06** | Redirecionamento para cadastro | Navegação | Clique em `"Ainda não tem conta?"` | Redirecionamento e título `"Cadastro de usuário"` visível (`/register`) |

---

## 2. Módulo: Cadastro de Usuário (`cypress/e2e/cadastro_usuario.cy.js`)

| ID | Cenário / Objetivo | Tipo | Dados de Entrada | Resultado Esperado |
| :--- | :--- | :---: | :--- | :--- |
| **CT-CAD-01** | Cadastro de usuário com sucesso | Positivo | Nome completo + E-mail válido + Senha de 6 caracteres | Mensagem `"Cadastro realizado!"` visível |
| **CT-CAD-02** | Cadastro com e-mail em formato inválido | Negativo | Nome completo + E-mail sem `@` (formato alfanumérico) + Senha de 6 caracteres | Mensagem `"O campo e-mail deve ser prenchido corretamente"` visível |
| **CT-CAD-03** | Cadastro sem preenchimento de senha | Negativo | Nome completo + E-mail válido + Senha: `""` | Mensagem `"O campo senha deve ter pelo menos 6 dígitos"` visível |

---

## 3. Módulo: Checkout (`cypress/e2e/checkout.cy.js`)

| ID | Cenário / Objetivo | Tipo | Ações e Dados | Resultado Esperado |
| :--- | :--- | :---: | :--- | :--- |
| **CT-CHK-01** | Preenchimento completo e confirmação de pedido | Positivo / E2E | - Dados de cobrança completos preenchidos via `checkout_pages.js`<br>- Checkbox de termos marcado<br>- Clique em `"Save"`<br>- Seleção de pagamento: `Mobile Banking` (`value="JavaScript"`)<br>- Clique em `"Place Order"` | 1. Mensagem de cobrança: `"Billings Information registred with success!"`<br>2. Modal de sucesso:<br>   - Título `h2`: `"Order success!"`<br>   - Mensagem `h3`: `"Congrats! Your order was created with sucess!"` |

---

## 4. Módulo Didático: Comandos Básicos (`cypress/e2e/comandos_basicos.cy.js`)

| ID | Foco da API | Ações Executadas | Objetivo de QA / Verificação |
| :--- | :--- | :--- | :--- |
| **CT-BAS-01** | `cy.visit()` | Visita à URL inicial da aplicação | Validação de carregamento inicial |
| **CT-BAS-02** | `cy.get()`, `find()`, `contains()` | Busca por ID (`#user`), escopo reduzido (`.mc-form .form-control`) e texto | Estratégias de localização no DOM |
| **CT-BAS-03** | `type()`, `rightclick()`, `dblclick()`, `click()` | Digitação e eventos de ponteiro sem desanexar elemento | Interações de entrada e cliques |
| **CT-BAS-04** | `cy.select()` | Seleção de opção em `<select>` (`#country`) | Manipulação de dropdowns nativos |
| **CT-BAS-05** | `check()`, `uncheck()` | Marcação/desmarcação de checkbox e rádio | Manipulação de elementos de formulário |
| **CT-BAS-06** | `should()` | Asserções encadeadas de visibilidade e texto | Validação determinística de estado de interface |
