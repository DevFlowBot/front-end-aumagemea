# 🐾 AUmaGemea Front-End

Projeto **frontend** feito em **Next.js** com **Chakra UI** para **componentização** e **design responsivo**.

---

## 🚀 Como rodar

1. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

2. **Rode o projeto em modo de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

3. **Abra no navegador:**

```
http://localhost:3000
```

---

## 🛠 Comandos Úteis

Nesta seção você encontra os principais scripts do projeto para **desenvolvimento**, **build**, **produção** e **formatação do código**.
É importante seguir esta ordem de execução para manter o projeto consistente e o código sempre limpo antes de commitar alterações.

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

### Build e Produção

```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

### Lint e Formatação

```bash
npm run lint:ci       # Executa ESLint e corrige problemas automaticamente
npm run format        # Formata todo o código com ESLint + Prettier
npm run format:check  # Verifica se o código está formatado corretamente
# ou
yarn lint:ci
yarn format
yarn format:check
```

💡 **Dica:** Sempre rode `format` antes de commitar para evitar problemas de estilo e inconsistência.

---

## 🗂 Estrutura do Projeto (dentro de `src/`)

- **app/** – Contém todas as páginas do projeto
  - `(main)/` → páginas públicas (home, etc)
  - `(auth)/` → páginas de autenticação (login, cadastro)
  - `layout.jsx` → layout raiz (Provider Chakra, header global, etc)

- **components/** – Componentes React organizados por escopo
  - `common/` → componentes reutilizáveis em várias páginas
  - `ui/` → infraestrutura de UI (Provider, Theme, HydrationGuard)

- **styles/** → estilos globais e overrides

---

## 🖌 Tecnologias Utilizadas

- **Next.js** (App Router)
- **React** (componentes modernos)
- **Chakra UI** (UI responsiva e acessível)
- **JSON local** para dados fake

---

## 💡 Dicas

- Siga a **estrutura de pastas** e mantenha a modularidade.
- Todos os **componentes novos devem ser responsivos** usando os breakpoints do Chakra (`base`, `md`, `lg`).
- Use os **JSONs fake** que estão na pasta `fakedata/` na raiz do projeto para testes enquanto o backend não estiver pronto.
