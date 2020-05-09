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

Utilize o comando abaixo para baixar as dependencias.

```bash
cd .\backend\
npm install
```

### Setup do backend

Antes de iniciar o projeto devesse preparar o ambiente, para fazer isso execute o script abaixo:

```bash
npm run-script setup
```
Após o script executar, pode encerrar ele e o utilize caso deseje resetar novamente o projeto.

### Iniciar o backend

Para iniciar utilize o comando abaixo estando no diretorio do backend.

```bash
npm run-script start
```

## FRONTEND

### Instalando dependencias

Na pasta de frontend localizada na raiz do projeto, utilize o comando abaixo para baixar as dependencias.

```bash
npm install
```

### Iniciar o frontend

Para iniciar utilize o comando abaixo estando no diretorio do frontend.

```bash
npm start
```