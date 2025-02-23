# 🛍️ Vue 3 - Arquitetura Modulada

Este é um projeto Vue 3 + Vite + TypeScript, estruturado de forma modular e escalável. Ele segue a separação de responsabilidades em camadas arquiteturais, tornando o código mais organizado, testável e fácil de manter.

---

## 🚀 Tecnologias Utilizadas

- **Vue 3** (Composition API + `<script setup>`)
- **Pinia** (Gerenciamento de estado)
- **Vue Router** (Navegação)
- **Tailwind CSS** (Estilização)
- **TypeScript** (Tipagem estática)
- **Vite** (Build rápido)

---

## 📂 Estrutura do Projeto
```
src/
│   App.vue
│   main.ts
│   vite-env.d.ts
│
├── assets/               # Arquivos estáticos (CSS, imagens)
│   ├── tailwind.css      # Configuração do Tailwind CSS
│   ├── vue.svg           # Imagem do Vue
│
├── core/                 # 🔹 Camada principal de regras de negócio
│   ├── models/           # Definição de tipos e interfaces
│   │   ├── product.model.ts  # Modelo do produto
│   │
│   ├── repositories/     # Comunicação com APIs ou BD
│   │   ├── product.repository.ts # Funções para buscar produtos
│   │
│   ├── use-cases/        # Casos de uso (regras de negócio)
│   │   ├── fetch-products.use-case.ts # Lógica de busca de produtos
│
├── features/             # 🔹 Funcionalidades específicas
│   ├── cart/             # Módulo do Carrinho de Compras
│   │   ├── store/        # Gerenciamento de estado (Pinia)
│   │   │   ├── cart.store.ts # Estado do carrinho
│   │
│   ├── products/         # Módulo de Produtos
│   │   ├── store/        # Estado do catálogo de produtos
│   │   │   ├── product.store.ts # Estado dos produtos
│
├── presentation/         # 🔹 Camada de apresentação (Componentes e Views)
│   ├── components/       # Componentes reutilizáveis
│   │   ├── ConfirmModal.vue  # Modal de confirmação
│   │
│   ├── views/            # Páginas principais
│   │   ├── CartView/     # Página do carrinho
│   │   │   ├── CartView.vue  # Componente principal da página
│   │   │   ├── components/   # Componentes específicos do carrinho
│   │   │   │   ├── CartItem.vue  # Item do carrinho
│   │   │
│   │   ├── HomeView/     # Página principal
│   │   │   ├── Home.vue  # Componente principal da página
│   │   │   ├── components/   # Componentes específicos da página inicial
│   │   │   │   ├── ProductList.vue  # Lista de produtos
│   │   │   │   ├── ProductModal.vue  # Modal de edição/criação de produto
│
├── router/               # 🔹 Gerenciamento de Rotas
│   ├── index.ts          # Configuração do Vue Router
│
└── store/                # 🔹 Estado global (se necessário no futuro)
```
---

## 🏗️ Arquitetura do Projeto

O projeto é organizado em camadas, seguindo uma abordagem modular e escalável:

### 1. **Camada `core/`**
Contém a lógica de negócio principal, independente da interface do usuário. Pode ser reutilizada em outros projetos.

- **`models/`**: Define tipos e interfaces.
  - Exemplo: `product.model.ts` → Modelo de um produto.
  
- **`repositories/`**: Gerencia a comunicação com APIs ou banco de dados.
  - Exemplo: `product.repository.ts` → Busca produtos de uma API.

- **`use-cases/`**: Implementa as regras de negócio.
  - Exemplo: `fetch-products.use-case.ts` → Lógica para buscar produtos.

---

### 2. **Camada `features/`**
Organiza o projeto em funcionalidades específicas, cada uma com sua própria estrutura.

- **`cart/`**: Módulo do Carrinho de Compras.
  - **`store/`**: Gerencia o estado do carrinho com Pinia.
    - Exemplo: `cart.store.ts` → Armazena itens do carrinho.

- **`products/`**: Módulo de Produtos.
  - **`store/`**: Gerencia o estado dos produtos.
    - Exemplo: `product.store.ts` → Armazena a lista de produtos.

---

### 3. **Camada `presentation/`**
Responsável pela interface do usuário, dividida em componentes reutilizáveis e páginas (views).

- **`components/`**: Componentes reutilizáveis.
  - Exemplo: `ConfirmModal.vue` → Modal de confirmação.

- **`views/`**: Páginas principais.
  - **`CartView/`**: Página do carrinho.
    - **`CartView.vue`**: Componente principal.
    - **`components/`**: Componentes específicos.
      - Exemplo: `CartItem.vue` → Item do carrinho.

  - **`HomeView/`**: Página inicial.
    - **`Home.vue`**: Componente principal.
    - **`components/`**: Componentes específicos.
      - Exemplo: `ProductList.vue` → Lista de produtos.
      - Exemplo: `ProductModal.vue` → Modal de edição/criação de produtos.

---

### 4. **Camada `router/`**
Gerencia as rotas da aplicação usando Vue Router.

- **`index.ts`**: Configuração das rotas.
  - Exemplo: Define rotas para `HomeView` e `CartView`.

---

### 5. **Camada `assets/`**
Armazena arquivos estáticos, como estilos CSS e imagens.

- **`tailwind.css`**: Configuração do Tailwind CSS.
- **`vue.svg`**: Imagem do Vue.

---

### 6. **Arquivos Raiz**
- **`App.vue`**: Componente raiz da aplicação.
- **`main.ts`**: Ponto de entrada da aplicação.
- **`vite-env.d.ts`**: Configuração de tipos globais para o Vite.

---

## 🛠️ Como Funciona a Integração entre Camadas

1. **Fluxo de Dados**:
   - A camada `presentation/` (UI) faz chamadas para a camada `core/` (lógica de negócio).
   - A camada `core/` usa `repositories/` para buscar dados de APIs ou bancos de dados.
   - Os dados são processados em `use-cases/` e retornados para a UI.

2. **Gerenciamento de Estado**:
   - O estado da aplicação é gerenciado por stores do Pinia, localizadas em `features/`.
   - Cada funcionalidade (ex: carrinho, produtos) tem sua própria store.

3. **Rotas**:
   - As rotas são configuradas em `router/index.ts` e vinculadas aos componentes em `views/`.

---

## 💡 Benefícios da Arquitetura

- **Modularidade**: Cada funcionalidade é isolada, facilitando a manutenção e a escalabilidade.
- **Separação de Responsabilidades**: A lógica de negócio, UI e estado são claramente separadas.
- **Reutilização**: A camada `core/` pode ser usada em outros projetos.
- **Testabilidade**: A estrutura modular facilita a escrita de testes unitários e de integração.

---

## 📦 Instalação e Execução

```bash
# Instale as dependências
npm install

# Rode o projeto em modo de desenvolvimento
npm run dev

# Para build de produção
npm run build

Acesse o projeto:
Abra o navegador e acesse:
http://localhost:5173
```
## 📦 Instalação e Execução com docker

```bash

# Construa a imagem Docker
docker-compose build

# Inicie o contêiner
docker-compose up

# Para rodar em segundo plano (detached mode)
docker-compose up -d

Acesse o projeto:
Abra o navegador e acesse:
http://localhost:5173
```
