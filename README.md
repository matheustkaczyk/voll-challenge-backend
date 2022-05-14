# API de online marketplace!

### Projeto de uma API em Node.js que contempla criação de usuários, funções, listagem e criação de produtos e lógica para compras.

---

## Visão Geral

##### Este projeto tinha como propósito a criação de um projeto Fullstack de uma loja de pontos utilizando Node.js, Express.js e Typescript.

##### Bibliotecas:

- [Express](https://expressjs.com/) v^4.17.3 - Framework Node
- [TypeScript] v^4.6.4 - Superset para Javascript
- [cors] v^2.8.5 - Pacote para configuração do CORS
- [dotenv] v^16.0.0  - Pacote para configuração de variáveis de ambiente
- [jsonwebtoken] v^8.5.1 - Pacote para configuração de tokens de autênticação
- [md5] v^2.3.0 - Pacote para a criação de hashes md5 para senhas
- [mongoose] v^6.3.2 - Ferramente para trabalhar com banco de dados não relacionais mais fácilmente
- [swagger-ui-express] v^4.4.0 - Pacote para configurar a documentação pelo swagger

## **Sumário**

- [Pré Requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Contexto e Regras de Negócio](#contexto-e-regras-de-negócio)
- [Rotas | Endpoints](#rotas-|-endpoints)
- [Sobre o autor](#sobre-o-autor)

---

## **Pré requisitos**

Para rodar esse projeto é necessário ter instalado em sua máquina o runtime Node.js.

---

## **Instalação**

### Utilização local

1. Você pode baixar o projeto em sua máquina utilizando o comando:

   **`git@github.com:matheustkaczyk/voll-challenge-backend.git`**

2. Entre na pasta do projeto digitando o comando **`cd voll-challenge-backend`**

3. Instale as dependências do projeto digitando **`npm install`** em seu terminal.

4. Na raiz do projeto crie um arquivo com o nome **`.env`**, nele ficará as suas variáveis de ambiente, por exemplo:
    ```
    PORT = 3001
    DB_CONNECTION = URI para a conexão com o seu mongodb
    SECRET= mysecret
    ```

5. O servidor está iniciado na porta 3001 e você pode começar a fazer as requisições com os formatos descritos na seção de **ROTAS**



### **Utilização online**

1. Foi disponibilizado uma api online onde poderá ser feito requisições de forma a não instalar nada no computador. É só fazer as requisições com os formatos descritos na seção de **ROTAS**. O link para acessar a API está logo abaixo.
   1. **COLOCAR AQUI**
   1. [ATENÇÃO] - Vale destacar que a **primeira requisição** do Heroku pode demorar e as vezes até falhar. Se não funcionar de primeira, por gentileza **tente cancelar e refazer** a requisição.



### **Utilização com interface gráfica**

Também está disponibilidado o Frontend desse projeto, link do repositório: **`https://github.com/matheustkaczyk/voll-challenge-frontend`**

O website pode ser acessado através deste link: **COLOCAR AQUI**

---

## Contexto e Regras de Negócio

O contexto dessa API é prover toda a lógica necessária para o frontend de uma loja virtual funcionar corretamente.

## Rotas | Endpoints

Todos os Endpoints dessa API estão disponíveis pelo swagger dentro da aplicação.
Para acessa-lo utilize a rota **`/docs`**.

---

## **Sobre o autor**

Obrigado por ter lido até aqui!

Eu me chamo Matheus, e sou desenvolvedor web fullstack. Comecei meus estudos no ano de 2020 e estou me apaixonando cada dia que passa, através dos estudos, por tecnologia e desenvolvimento. Esse projeto e esse README foram desenvolvidos como um desafio técnico. Eu empenhei muito carinho na construção de cada linha.

[Você pode olhar mais dos meus repositórios aqui](https://github.com/matheustkaczyk)

[Ou se conectar comigo no linkedin!](https://www.linkedin.com/in/matheustkaczykribeiro/)