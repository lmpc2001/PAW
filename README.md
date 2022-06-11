# Programação em Ambiente Web

![PAW](https://img.shields.io/badge/Faculdade-PAW-orange)
![Nota](https://img.shields.io/badge/Nota%20final-X-orange)

## Descrição
Projeto desenvolvido no âmbito da disciplina de Programação em Ambiente Web
Ano letivo 2021/2022.
Este projeto consiste no desenvolvimento de uma API REST e de um Website utilizado por uma libraria e seus clientes de modo a permitir comprar e vender livros novos ou usados e gerir programas de fidelização dos clientes.

## Constituição
- Milestone #1
  - Backend 
- Milestone #2
  - Frontend

## Features
- [x] Compra e Venda de Livros;
- [ ] Gestão de programas de fidelização dos clientes;
- [x] Integração de APIs externas para pagamentos ;
- [x] Login;


## Comandos
### Clonar o repositorio

``` bash
git clone https://github.com/lmpc2001/PAW.git
```

### Desenvolvimento

#### Ligar tudo

```bash
yarn start-all
```

#### Prisma studio

``` bash
yarn start-prisma
```

#### Ligar o backend

```bash
yarn start-backend
```

#### Ligar o frontend

``` bash
yarn start-frontend
```

### Testes

#### Testar tudo
Para testar tudo certifique-se que tem o backend ligado, para isso pode usar os comandos [yarn start-all](#ligar-tudo)
 ou [yarn start-backend](#ligar-o-backend)
``` bash
yarn test-all
```

#### Testes á API pelo Newman
Para testar a API certifique-se que tem o backend ligado, para isso pode usar os comandos [yarn start-all](#ligar-tudo)
 ou [yarn start-backend](#ligar-o-backend)
``` bash
yarn test-api
```

#### Testes ao frontend do Angular

``` bash
yarn test-angular
```


## Credenciais para testes

### Administrador

```
email: admin@teste.com
password: password1
```
### Funcionario

```
email: funcionario@teste.com
password: password1
```
### Cliente

```
email: cliente@teste.com
password: password1
```

### Autores:

- Luís Costa (8200737)
- Gonçalo Gil (8200335)
- José Conde (8200350)
