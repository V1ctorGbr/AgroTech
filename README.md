# AgroSys ERP 🌱

Sistema ERP agrícola desenvolvido com **Java 21** e **Spring Boot**, voltado para o gerenciamento completo de propriedades rurais, produção agrícola, estoque, funcionários, máquinas, financeiro e relatórios.

---

# 📌 Sobre o projeto

O **AgroSys ERP** é um sistema desenvolvido com foco no gerenciamento agrícola moderno, permitindo controlar todas as operações de uma fazenda ou empresa agrícola em um único ambiente.

O projeto tem como objetivo o aprendizado de desenvolvimento backend profissional, arquitetura em camadas, boas práticas de programação e construção de um sistema real para portfólio.

---

# 🚀 Tecnologias utilizadas

## Backend

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- Spring Validation
- Lombok
- JWT Authentication
- MySQL

## Frontend

- React
- Vite
- HTML5
- CSS3
- JavaScript

## Ferramentas

- Maven
- Git/GitHub
- Postman
- IntelliJ IDEA
- VS Code
- Docker (futuramente)
- Swagger/OpenAPI (futuramente)

---

# 🧱 Arquitetura do projeto

```text
AgroSys/
│
├── Back-End/
│   ├── .mvn/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── victor/
│   │   │   │           └── agrosys/
│   │   │   │               ├── config/
│   │   │   │               ├── controllers/
│   │   │   │               ├── dto/
│   │   │   │               ├── exceptions/
│   │   │   │               ├── models/
│   │   │   │               ├── repositories/
│   │   │   │               ├── security/
│   │   │   │               ├── services/
│   │   │   │               ├── utils/
│   │   │   │               └── AgroSysApplication.java
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── Front-End/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── README.md
├── .gitignore
└── .gitattributes