# API de online marketplace!

### Projeto de uma API em Node.js que contempla criação de usuários, funções, listagem e criação de produtos e lógica para compras.

---

## Visão Geral

##### Este desafio técnico tinha como propósito a criação de um projeto Fullstack de uma loja de pontos utilizando React no frontend e Node.js, Express.js e Typescript no backend.

##### Bibliotecas:

- [Express](https://expressjs.com/) v^4.17.3 - Framework Node
- [TypeScript](https://www.npmjs.com/package/typescript) v^4.6.4 - Superset para Javascript
- [cors](https://www.npmjs.com/package/cors) v^2.8.5 - Pacote para configuração do CORS
- [dotenv](https://www.npmjs.com/package/dotenv) v^16.0.0  - Pacote para configuração de variáveis de ambiente
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) v^8.5.1 - Pacote para configuração de tokens de autênticação
- [md5](https://www.npmjs.com/package/md5) v^2.3.0 - Pacote para a criação de hashes md5 para senhas
- [mongoose](https://www.npmjs.com/package/mongoose) v^6.3.2 - Ferramente para trabalhar com banco de dados não relacionais mais fácilmente
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) v^4.4.0 - Pacote para configurar a documentação pelo swagger

## **Sumário**

- [Pré Requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Contexto e Regras de Negócio](#contexto-e-regras-de-negócio)
- [Rotas | Endpoints](#rotas-|-endpoints)
- [Próximos passos](#próximos-passos)
- [Maiores desafios](#maiores-desafios)
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

### **Utilização online**

1. Foi disponibilizado uma api online onde poderá ser feito requisições de forma a não instalar nada no computador. É só fazer as requisições com os formatos descritos na seção de **ROTAS**. O link para acessar a API está logo abaixo.
   1. **`https://vollcoinstoreback.herokuapp.com/`**
   1. [ATENÇÃO] - Vale destacar que a **primeira requisição** do Heroku pode demorar e as vezes até falhar. Se não funcionar de primeira, por gentileza **tente cancelar e refazer** a requisição.
   2. Por enquanto só há um administrador cadastrado, segue o login: **` email: root@root.com, senha: root `**

### **Utilização com interface gráfica**

Também está disponibilidado o Frontend desse projeto, link do repositório: **`https://github.com/matheustkaczyk/voll-challenge-frontend`**

O website pode ser acessado através deste link: **`https://vollcoinstore.netlify.app/`**

---

## Contexto

O contexto dessa API é prover toda a lógica necessária para o frontend de uma loja virtual funcionar corretamente.

## Rotas | Endpoints

Todos os Endpoints dessa API estão disponíveis pelo swagger dentro da aplicação.
Para acessa-lo utilize a rota **`https://vollcoinstoreback.herokuapp.com/docs`**.

## **Próximos passos**
1. Configurar 100% o swagger, ele está listando todas as rotas, mas nem todas ele consegue chamar
2. Testes de integração e unitários
3. Melhorar o tratamento de erro, trazer padronização e mensagens mais nítidas
4. Rota para listar os pedidos do usuário

## **Maiores desafios**
Desenvolver essa API não foi uma tarefa fácil, a idéia provida foi: uma loja de pontos. Foi necessário muitas telas de excalidraw, idealizando e abstraindo  para assim começar o desenvolvimento. Essa com certeza foi a tarefa mais difícil do projeto.

---

## **Sobre o autor**

Obrigado por ter lido até aqui!

Eu me chamo Matheus, e sou desenvolvedor web fullstack. Comecei meus estudos no ano de 2020 e estou me apaixonando cada dia que passa, através dos estudos, por tecnologia e desenvolvimento. Esse projeto e esse README foram desenvolvidos como um desafio técnico. Eu empenhei muito carinho na construção de cada linha.

[Você pode olhar mais dos meus repositórios aqui](https://github.com/matheustkaczyk)

[Ou se conectar comigo no linkedin!](https://www.linkedin.com/in/matheustkaczykribeiro/)
