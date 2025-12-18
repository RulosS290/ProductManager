# 🧩 ProductManager – Full Stack PERN Project

**ProductManager** is a **full-stack product management application** built as part of a learning project using the **PERN stack** (**PostgreSQL, Express, React, Node.js**).

This project demonstrates how to build a complete system from backend to frontend, including:

* A **RESTful API** with full CRUD operations
* A **React frontend** consuming the API
* **Automated testing**
* **API documentation**
* Clean project structure and TypeScript across the stack

---

## 🎯 Project Goal

**Product Manager**

This is the **first full-stack project** in which both frontend and backend are developed.

Key objectives:

* Build a REST API with Node.js and Express
* Connect a React frontend to the API
* Implement a complete CRUD flow
* Apply **TypeScript** in both frontend and backend
* Add **automated testing**
* Document the API using **Swagger**

---

## 🏗️ Tech Stack

### Backend (Server)

* Node.js + Express
* TypeScript
* PostgreSQL (Docker)
* Sequelize / Sequelize-Typescript
* Jest + Supertest (100% coverage)
* Swagger UI (API documentation)

📄 **Backend documentation:**
👉 [`server/README.md`](./server/README.md)

---

### Frontend (Client)

* React 19
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Valibot (form validation)

📄 **Frontend documentation:**
👉 [`client/README.md`](./client/README.md)

---

## 📂 Repository Structure

```bash
ProductManager/
 ├── server/        # Backend (REST API)
 ├── client/        # Frontend (React + Tailwind)
 └── README.md      # Main project overview
```

---

## 🚀 Quick Start (High Level)

1️⃣ Clone the repository

```bash
git clone https://github.com/RulosS290/ProductManager.git
cd ProductManager
```

2️⃣ Follow setup instructions for each part:

* Backend setup → [`server/README.md`](./server/README.md)
* Frontend setup → [`client/README.md`](./client/README.md)

---

## 🔗 Application Flow

1. PostgreSQL stores product data
2. Express REST API exposes CRUD endpoints
3. React frontend consumes the API using Axios
4. Forms are validated on the client
5. API is fully documented and tested

---

## 📌 Notes

* Backend and frontend are **fully decoupled**
* CORS is configured using environment variables
* Designed to be easily extensible (auth, pagination, filters, etc.)
* Follows real-world full-stack project structure

---

## 👨‍💻 Author

**Daniel Torres**
GitHub: [https://github.com/RulosS290](https://github.com/RulosS290)
