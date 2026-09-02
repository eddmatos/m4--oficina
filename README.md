# 🚗 Gerenciador de Oficina

Projeto exemplo desenvolvido para as aulas do curso técnico em **Desenvolvimento de Sistemas**, na disciplina de **Programação Orientada a Objetos (POO)**, ministradas pelo professor **Davi Magalhães** ([@davimagals](https://github.com/davimagals)).

O projeto consiste em uma aplicação web simples para gerenciamento de uma oficina mecânica. O objetivo principal não é criar um sistema comercial completo, mas utilizar um projeto realista para estudar conceitos de **POO, TypeScript, Node.js, Express, APIs REST e banco de dados MySQL**.

---

## 📚 Tecnologias utilizadas

* **HTML / CSS / JavaScript** — Frontend
* **TypeScript** — Backend
* **Node.js** — Ambiente de execução do backend
* **Express** — Framework HTTP
* **MySQL** — Banco de dados
* **XAMPP** — Ambiente utilizado para disponibilizar o MySQL localmente
* **Git / GitHub** — Controle de versão

---

# 🏗️ Estrutura do projeto

De forma simplificada, o projeto está organizado assim:

```text
m4-oficina/
│
├── backend/
│   └── src/
│       ├── controllers/
│       ├── database/
│       ├── middlewares/
│       ├── models/
│       ├── routes/
│       ├── services/
│       ├── app.ts
│       └── server.ts
│
├── frontend/
│   ├── assets/
│   └── pages/
│
├── package.json
├── tsconfig.json
└── README.md
```

A comunicação do backend segue, de forma simplificada, o seguinte fluxo:

```text
Requisição HTTP
      ↓
    Route
      ↓
  Controller
      ↓
   Service
      ↓
 MySQL Pool
      ↓
    MySQL
```

O projeto utiliza **classes** principalmente nos Controllers e Services, permitindo trabalhar conceitos de Programação Orientada a Objetos em um sistema prático.

---

# 💻 1. Instalar os programas necessários

Antes de começar, instale os seguintes programas no computador.

## Node.js

O Node.js é responsável por executar o backend da aplicação.

Baixe a versão **LTS** no site oficial:

[Download do Node.js](https://nodejs.org/?utm_source=chatgpt.com)

Depois de instalar, abra o **PowerShell** ou **Prompt de Comando** e verifique:

```bash
node --version
```

Também verifique o npm:

```bash
npm --version
```

Se os dois comandos exibirem uma versão, o Node.js está instalado corretamente.

---

# 🔧 2. Instalar o Git

O Git será utilizado para baixar o projeto do GitHub e posteriormente enviar suas alterações.

Baixe o Git:

[Download do Git](https://git-scm.com/downloads?utm_source=chatgpt.com)

Depois da instalação, verifique:

```bash
git --version
```

---

# 🗄️ 3. Instalar o XAMPP

O projeto utiliza MySQL como banco de dados.

Para facilitar a configuração do ambiente de desenvolvimento, utilizaremos o XAMPP.

Baixe o XAMPP:

[Download do XAMPP](https://www.apachefriends.org/?utm_source=chatgpt.com)

Após instalar, abra o **XAMPP Control Panel**.

Inicie o serviço:

```text
MySQL
```

O Apache **não é necessário para executar o backend deste projeto**.

O Node.js/Express será responsável pelo servidor da aplicação.

---

# 🐙 4. Criar sua própria cópia do projeto no GitHub

Cada aluno deverá criar uma cópia do projeto em sua própria conta do GitHub.

Na página do projeto no GitHub, clique em:

```text
Fork
```

Isso criará uma cópia do projeto na sua própria conta.

Depois disso, você deverá trabalhar na **sua cópia (fork)**.

> ⚠️ Não faça alterações diretamente no repositório original da disciplina.

---

# 📥 5. Clonar o projeto para o computador

Depois de criar o fork, abra a página do seu repositório no GitHub.

Clique em:

```text
Code
```

e copie a URL do repositório.

No terminal, entre na pasta onde deseja guardar seus projetos e execute:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Por exemplo:

```bash
git clone https://github.com/seu-usuario/m4-oficina.git
```

Entre na pasta:

```bash
cd m4-oficina
```

---

# 📦 6. Instalar as dependências do Node.js

Dentro da pasta do projeto, execute:

```bash
npm install
```

O npm irá ler o arquivo:

```text
package.json
```

e instalar todas as dependências necessárias.

Após a instalação, deverá aparecer uma pasta:

```text
node_modules/
```

Essa pasta **não deve ser enviada para o GitHub**.

---

# 🗄️ 7. Configurar o banco de dados

Antes de executar o sistema, precisamos criar o banco de dados.

## 7.1. Iniciar o MySQL

Abra o **XAMPP Control Panel** e clique em:

```text
Start
```

na linha do **MySQL**.

---

## 7.2. Abrir o phpMyAdmin

No navegador, acesse:

```text
http://localhost/phpmyadmin
```

O phpMyAdmin permite administrar o banco de dados MySQL através do navegador.

---

## 7.3. Executar o script do banco

Dentro do projeto existe o arquivo:

```text
backend/src/database/database.sql
```

Esse arquivo contém os comandos SQL necessários para criar a estrutura inicial do banco de dados.

No phpMyAdmin:

1. Abra a aba **SQL**.
2. Abra o arquivo `database.sql` no seu editor de código.
3. Copie todo o conteúdo.
4. Cole o conteúdo na área de SQL do phpMyAdmin.
5. Execute os comandos.

Após a execução, o banco de dados deverá estar criado e pronto para utilização.

---

# ⚙️ 8. Configurar a conexão com o banco

A conexão com o MySQL está configurada no arquivo:

```text
backend/src/database/pool.ts
```

Atualmente, a configuração utilizada pelo projeto é semelhante a:

```ts
const pool = mysql2.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'oficina',

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
```

Se sua instalação do MySQL utilizar configurações diferentes, será necessário ajustar esses valores.

Por exemplo, caso seu usuário tenha uma senha, altere:

```ts
password: ''
```

para a senha configurada no seu MySQL.

---

# ▶️ 9. Executar o projeto

Com:

* Node.js instalado;
* Git instalado;
* MySQL iniciado no XAMPP;
* Banco de dados criado;
* Dependências instaladas;

execute, na pasta raiz do projeto:

```bash
npm run dev
```

Se tudo estiver correto, deverá aparecer uma mensagem semelhante a:

```text
Servidor rodando na porta 3000
```

---

# 🌐 10. Acessar o sistema

Abra o navegador e acesse:

```text
http://localhost:3000
```

A aplicação deverá ser exibida.

As rotas da API podem ser acessadas através de:

```text
http://localhost:3000/api/veiculos
```

Por exemplo:

```text
GET /api/veiculos
POST /api/veiculos/criar
PATCH /api/veiculos/editar/:id
DELETE /api/veiculos/apagar/:id
```

---

# 🔄 11. Fluxo de desenvolvimento

Durante o desenvolvimento, normalmente você seguirá este fluxo:

```text
1. Alterar o código
       ↓
2. Testar a aplicação
       ↓
3. Verificar se está funcionando
       ↓
4. git add
       ↓
5. git commit
       ↓
6. git push
```

Para enviar suas alterações ao GitHub:

```bash
git add .
```

Depois:

```bash
git commit -m "Descrição da alteração"
```

E finalmente:

```bash
git push
```

---

# 🧪 12. Testando a API

Você pode utilizar ferramentas como:

* Postman
* Insomnia
* Thunder Client (extensão do VS Code)
* O próprio frontend da aplicação

Por exemplo, para listar os veículos:

```http
GET http://localhost:3000/api/veiculos
```

Para criar um veículo:

```http
POST http://localhost:3000/api/veiculos/criar
```

Com um corpo JSON semelhante a:

```json
{
    "placa": "ABC1D23",
    "marca": "Toyota",
    "modelo": "Corolla",
    "ano": 2024
}
```

---

# 🧑‍💻 13. Trabalhando com o projeto

Durante as atividades, procure observar principalmente a separação de responsabilidades.

### Routes

Definem quais URLs estão disponíveis:

```text
GET /api/veiculos
POST /api/veiculos/criar
...
```

### Controllers

Recebem as requisições HTTP e devolvem as respostas.

```text
Request → Controller → Response
```

### Services

Implementam as operações e regras relacionadas aos veículos.

```text
Controller → Service
```

### Models

Definem a estrutura dos objetos utilizados pela aplicação.

```ts
interface Veiculo {
    id?: number;
    placa: string;
    marca: string;
    modelo: string;
    ano: number;
}
```

### Database

Contém a configuração do acesso ao MySQL.

```text
Service → Pool → MySQL
```

---

# 🎯 Objetivo do projeto

O objetivo deste projeto é utilizar um sistema relativamente simples para estudar, na prática:

* Classes e objetos;
* Encapsulamento;
* Métodos;
* Atributos;
* Construtores;
* Tipos e interfaces;
* Organização de um projeto orientado a objetos;
* Separação de responsabilidades;
* Programação assíncrona;
* APIs REST;
* Acesso a banco de dados;
* TypeScript;
* Node.js;
* Express.

O sistema poderá ser ampliado durante as aulas com novas funcionalidades e entidades.

---

# 🆘 Problemas comuns

### `node is not recognized`

O Node.js provavelmente não está instalado ou não foi adicionado ao PATH.

Verifique a instalação e reinicie o terminal.

---

### `git is not recognized`

O Git não está instalado ou não foi adicionado ao PATH.

Instale o Git e abra um novo terminal.

---

### `Table 'oficina.veiculo' doesn't exist`

O banco de dados ou as tabelas ainda não foram criados.

Verifique se o arquivo:

```text
backend/src/database/database.sql
```

foi executado corretamente no phpMyAdmin.

---

### Erro de conexão com MySQL

Verifique se o **MySQL está iniciado no XAMPP**.

Também confira as configurações em:

```text
backend/src/database/pool.ts
```

---

### `npm run dev` não funciona

Primeiro tente instalar as dependências novamente:

```bash
npm install
```

Depois:

```bash
npm run dev
```

---

## 📌 Resumo rápido

Depois que o ambiente estiver instalado, para executar o projeto no dia a dia:

```bash
# Entrar na pasta do projeto
cd m4-oficina

# Instalar dependências (necessário apenas inicialmente)
npm install

# Iniciar o servidor
npm run dev
```

E mantenha o **MySQL iniciado no XAMPP**.

Depois acesse:

```text
http://localhost:3000
```

Bom desenvolvimento! 🚗💻
