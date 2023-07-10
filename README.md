## Documentação da API
KenzieKars API é uma API RESTFul com o objetivo de gerenciar um e-commerce de automóvies
 
Possui funcionalidades como:
- Registro, edição, consulta e deleção de usuários junto com endereço
- Login e recuperação de login
- Registro, edição, consulta e deleção de anúncios, onde possui dados do automóvel a ser vendido
- Criação, edição, consulta e deleção de comentários de um automóvel específico

## Tabela de Conteúdos

- [Linguagens e Tecnologias](#1-linguagens-e-tecnologias)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalação de dependências](#31-instalando-dependências)
    - [Ativando o ambiente virtual](#32-variáveis-de-ambiente)
    - [Instalar as dependências](#33-migrations)
    - [Variáveis de Ambiente](#34-rodando-o-servidor)
- [Estrutura da API](#4-estrutura-da-api)

---

## 1. Linguagens e Tecnologias

Visão geral do projeto, um pouco das tecnologias usadas.

<a href="https://www.typescriptlang.org" target="_blank"> <img style="width: 45px; max-width:100%; height: 40px;" alt="typescript"  src="https://skills.thijs.gg/icons?i=typescript"/> </a>
<a href="https://nodejs.org/en" target="_blank"> <img style="width: 45px; max-width:100%; height: 40px;" alt="Node.js"  src="https://nodejs.org/static/images/logo.svg"/> </a>
<a href="https://zod.dev/" target="_blank"> <img src="https://zod.dev/logo.svg" alt="zod" style="width: 40px; max-width:100%; height: 40px;"/></a>
<a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" style="width: 40px; max-width:100%; height: 40px;"/></a>
<a href="https://expressjs.com/pt-br/" target="_blank"> <img style="width: 45px; max-width:100%; height: 40px;" alt="Express js"  src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"/> </a>
<a href="https://www.postgresql.org/" target="_blank"> <img style="width: 45px; max-width:100%; height: 40px;" alt="Postgresql"  src="https://www.postgresql.org/media/img/about/press/elephant.png"/> </a>
<a href="https://typeorm.io/" target="_blank"> <img style="width: 45px; max-width:100%; height: 40px;" alt="Typeorm"  src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png"/> </a>
<a href="https://nodemailer.com/about/" target="_blank"> <img style="width: 45px; max-width:100%; height: 40px;" alt="Nodemailer"  src="https://nodemailer.com/nm_logo_200x136.png"/> </a>

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en)
- [Zod](https://zod.dev/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [cors](https://www.npmjs.com/package/cors)
- [mailgen](https://www.npmjs.com/package/mailgen)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)


URL base da aplicação: http://localhost:3000/

---

## 2. Diagrama ER

Diagrama DER da API com as relações entre as tabelas do banco de dados.

<p align="center">
  <img src="" width="700" height="400" object-fit=contain />
</p>

---

## 3. Início rápido
[ Voltar para o topo ](#documentação-da-api)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina:

```
git clone git@github.com:grupo21-t14-kenzieKars/back-end-kenzieKars.git
```

Entre na pasta do arquivo clonado:

```
code .
```

Instale as dependências:

```
yarn
```

ou

```
npm i
```

### 3.2. Variáveis de Ambiente

Crie um arquivo .env e copie o formato do arquivo .env.example

### 3.3. Migrations:

```
yarn typeorm migration:run -d src/data-source.ts
```
ou

```
npm run typeorm migration:run -- -d src/data-source.ts
```

### 3.4. Rodando o Servidor

Para rodar localmente na porta 3000, execute o comando:

```
yarn dev
```

ou

```
npm run dev
```

## 4. Estrutura da API

- [Documentação](https://api-docs-plum.vercel.app)
