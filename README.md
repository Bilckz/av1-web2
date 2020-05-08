# av1-web2

Projeto para AV1 da faculdade, utilizando NODE, MONGODB, EXPRESS e REACT.

## BANCO DE DADOS

O banco utilizado foi Mongodb, apontado para porta padrão 27017.
É possível realizar a instalação do banco ou utilizar o docker com os seguintes comandos:

### Comando para baixar a imagem do Mongodb

```bash
docker  pull tutum/mongodb
```

### Comando para criar o container utilizando a imagem baixada

```bash
docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb
```

## BACKEND

### Instalando dependencias

Acesse a pasta /backend e utilize o comando abaixo para baixar as dependencias.

```bash
npm install
```

### Executar o backend

Para executar o banckend acesse a pasta backend/src e utilize o comando abaixo:

```bash
node index.js
```