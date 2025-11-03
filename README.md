# 🧩 ProductManager

**ProductManager** is a RESTful API built with **Express** and **TypeScript** for managing product data.  
It uses **PostgreSQL** as the database and **Sequelize** as the ORM to handle data operations efficiently with full TypeScript support.

---

## 🚀 Technologies Used

- **Node.js** + **Express** → Backend framework  
- **TypeScript** → Static typing and safer code  
- **Sequelize / Sequelize-Typescript** → ORM for PostgreSQL  
- **PostgreSQL 17 (Docker)** → Relational database  
- **dotenv** → Environment variable management  
- **express-validator** → Request validation middleware  
- **nodemon** + **ts-node** → Live development and TypeScript execution  

---

## ⚙️ Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/RulosS290/ProductManager.git
cd ProductManager
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env` file in the root directory with the following variable:

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

## 🐳 Docker Setup (PostgreSQL)

If you want to test the project locally without installing PostgreSQL, you can spin up a container with Docker:

```bash
docker run --name postgres17 \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin123 \
  -e POSTGRES_DB=products \
  -p 5432:5432 \
  -d postgres:17
```

**Connection URL:**

```
postgresql://admin:admin123@localhost:5432/products
```

### Useful Docker Commands

```bash
# Stop the container
docker stop postgres17

# Remove the container
docker rm -f postgres17

# Remove the image
docker rmi postgres:17
```

---

## 🧠 Postman Collection

A ready-to-use **Postman collection** is included in the repository to test all available API endpoints.

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
 ├── models/          # Sequelize models
 ├── config/          # DB and environment configuration
 └── middlewares/     # Validations, error handling, etc.
```

---

## 👨‍💻 Author

**Daniel Torres**
[GitHub](https://github.com/RulosS290)

