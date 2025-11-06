# 🧩 ProductManager

**ProductManager** is a RESTful API built with **Express** and **TypeScript** for managing product data.
It uses **PostgreSQL** as the database and **Sequelize** as the ORM to handle data operations efficiently with full TypeScript support.
Now includes **automated testing with Jest and Supertest** for 100% code coverage.

---

## 🚀 Technologies Used

* **Node.js** + **Express** → Backend framework
* **TypeScript** → Static typing and safer code
* **Sequelize / Sequelize-Typescript** → ORM for PostgreSQL
* **PostgreSQL 17 (Docker)** → Relational database
* **dotenv** → Environment variable management
* **express-validator** → Request validation middleware
* **nodemon** + **ts-node** → Live development
* **Jest** + **Supertest** → Unit and integration testing
* **ts-jest** → Jest transformer for TypeScript

---

## ⚙️ Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/RulosS290/ProductManager.git
cd ProductManager
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL='postgresql://admin:admin123@localhost:5432/products'
```

### 4️⃣ Run the server

```bash
npm run dev
```

The API will be available at:
👉 `http://localhost:3000`

---

## 🧪 Testing & Coverage

This project includes **Jest** and **Supertest** for full testing coverage.

### Available scripts

```bash
# Run all tests (automatically clears test data before running)
npm test

# Run tests with coverage report
npm run test:coverage
```

📊 **Coverage Summary (100%)**

| Metric     | Coverage |
| ---------- | -------- |
| Statements | 100%     |
| Branches   | 100%     |
| Functions  | 100%     |
| Lines      | 100%     |

<img width="548" height="223" alt="image" src="https://github.com/user-attachments/assets/679c764f-1260-40fd-8563-6e2e58a83eca" />


---

## 🐳 Docker Setup (PostgreSQL)

You can run PostgreSQL locally with Docker:

```bash
docker run --name postgres17 \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin123 \
  -e POSTGRES_DB=products \
  -p 5432:5432 \
  -d postgres:17
```

Connection URL:

```
postgresql://admin:admin123@localhost:5432/products
```

### Useful Docker Commands

```bash
docker stop postgres17
docker rm -f postgres17
docker rmi postgres:17
```

---

## 🧠 Postman Collection

A ready-to-use **Postman collection** is included to test all endpoints.

📁 Path:

```
postman/ProductManager.postman_collection.json
```

---

## 📁 Project Structure

```bash
src/
 ├── index.ts         # Main entry point
 ├── routes/          # API routes
 ├── controllers/     # Business logic
 ├── handlers/        # Request handlers
 ├── models/          # Sequelize models
 ├── config/          # DB and environment configuration
 ├── middlewares/     # Validations, error handling, etc.
 └── data/            # Scripts for test data reset
```

---

## 👨‍💻 Author

**Daniel Torres**
[GitHub](https://github.com/RulosS290)
