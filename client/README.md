# 🖥️ ProductManager Front

**ProductManager Front** is the frontend application for the ProductManager project.
It is a **React + TypeScript** single-page application built with **Vite** and styled using **Tailwind CSS**, providing a clean and responsive UI for managing products through a **basic CRUD** (Create, Read, Update, Delete).

The frontend communicates with the **ProductManager REST API** to perform all data operations.

---

## 🚀 Technologies Used

* **React 19** → UI library
* **TypeScript** → Static typing and safer code
* **Vite** → Fast development server and build tool
* **Tailwind CSS** → Utility-first CSS framework
* **React Router DOM** → Client-side routing
* **Axios** → HTTP client for API requests
* **Valibot** → Schema-based form validation
* **ESLint** → Code linting and quality rules

---

## ✨ Features

* Product list view
* Create new products
* Update existing products
* Delete products
* Client-side routing
* Form validation with Valibot
* Responsive UI with Tailwind CSS
* Fully typed with TypeScript

---

## 📦 Project Structure

```bash
client/
 ├── src/
 │   ├── components/    # Reusable UI components
 │   ├── views/         # Pages (List, Create, Edit, etc.)
 │   ├── router/        # React Router configuration
 │   ├── services/      # Axios API calls
 │   ├── types/         # TypeScript types and interfaces
 │   ├── utils/         # Helpers and validators
 │   ├── main.tsx       # App entry point
 │   └── index.css      # Tailwind CSS setup
 ├── public/
 ├── package.json
 ├── vite.config.ts
 └── tsconfig.json
```

---

## ⚙️ Local Setup

### 1️⃣ Go to the frontend directory

```bash
cd client
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:3000
```

> This URL must point to the **ProductManager backend API**.

---

### 4️⃣ Run the development server

```bash
npm run dev
```

The app will be available at:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

---

## 🔗 Backend Dependency

This frontend depends on the **ProductManager API** running locally.

Make sure the backend is running at:

```
http://localhost:3000
```

And that CORS is properly configured using:

```env
FRONTEND_URL=http://localhost:5173
```

---

## 📌 Notes

* This frontend is intentionally simple and focused on demonstrating a clean CRUD flow.
* Designed to be easily extendable (authentication, pagination, filters, etc.).
* Fully compatible with the Swagger-documented backend API.

---

## 👨‍💻 Author

**Daniel Torres**
[GitHub](https://github.com/RulosS290)
