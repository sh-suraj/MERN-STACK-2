# MERN Stack E-Commerce Website (Backend)

just **studying** not for **production**!!

---

## 🚀 Tech Stack

- **Node.js** – JavaScript runtime for server-side development
- **Express.js** – Fast, unopinionated web framework for Node.js
- **Postgresql** - 🐘 [PostgreSQL Notes & Practice](./src/postgresql_readme/)

- **Mongoose** – ODM for MongoDB
- **JWT** – Authentication & authorization
- **dotenv** – Environment variable management

---

## Requests Methods

- params
- query
- body

## PostgreSql commands

```
\list;       ---> check list of existing databse
\! cls;       ---> clear screen
\c <database-name>; ---> change database name
drop database <database-name>; ---> deletes the database

CRUD

create a table:
query->
CREATE TABLE product(
  id INT,
  name VARCHAR(100),
  city VARCHAR(100)
);

\d product ---> opens table person
insert data in tables:
query->
INSERT INTO product(id, name, brand)
values('001', 'Paracetamol 500mg', 'Cipla'), ('002', 'Azithromycin 500 mg', 'Time-pharmacuticals');

read from table:
SELECT * FROM product ---> selects every column
SELECT name FROM product ---> selects name column
SELECT name, id FROM product ---> selects name and id column

update from db
UPDATE product
SET name = 'Flexon'
WHERE id = '001';

Delete from db
DELETE FROM product
WHERE id='001';

Data Types:
Numeric: INT DOUBLE FLOAT DECIMAL
String: VARCHAR
Date: DATE
Boolean: BOOLEAN

```

## Cases

```text
cases that can be used in naming:
1. Sentence Case: Hello world
2. Camel Case: helloWorld (we are using this case)
3. Pascal Case: HelloWorld
4. Kebab Case: hello-world
5. Snake Case: hello_world
```

## 📁 Project Structure

```text
root/
├── package.json
├── .env                  # Environment variables (private)
├── .env.example          # Sample environment configuration
├── .gitignore
├── node_modules/
└── src/
    ├── server.js         # Server entry point
    ├── app.js            # Express app configuration
    ├── routes/           # API route definitions
    │   └── authRoutes.js
    ├── controllers/      # Request & response handling
    │   └── authController.js
    ├── services/         # Business logic layer
    │   └── authServices.js
    ├── models/           # Database schemas
    │   └── auth.js
    ├── middleware/       # Custom middlewares
    │   └── authMiddleware.js
    ├── utils/            # Utility functions
    │   └── jwtAuth.js
    ├── helpers/          # Helper functions
    │   └── dataFormatter.js
    ├── constants/        # Constant values & enums
    │   └── roles.js
    ├── lib/              # Reusable logic
    │   └── userType.js
    └── db/               # Database configuration
        └── db.js
```

---

## 📦 Express.js Overview

**Express.js** is a minimalist Node.js framework used to build web servers and REST APIs.

### Key Features:

- Fast and lightweight
- Middleware-based architecture
- Easy routing and request handling
- Unopinionated (developer has full control over structure)

Used here to:

- Handle HTTP requests
- Define RESTful routes
- Connect middleware and controllers

---

## 🔄 JSON Data Format

**JSON (JavaScript Object Notation)** is a lightweight, text-based data format used for data exchange.

### Why JSON?

- Language-independent
- Human-readable
- Widely supported
- Standard for REST APIs

### JavaScript Conversion Methods

- JSON → JavaScript Object

  ```js
  JSON.parse();
  ```

- JavaScript Object → JSON

  ```js
  JSON.stringify();
  ```

---

## 🌐 REST API Concepts

### REST (Representational State Transfer)

REST is an architectural style for designing networked applications.

### Core Principles:

- Stateless communication
- Client-server separation
- Resource-based URLs
- Uses standard HTTP methods

### Common HTTP Methods

| Method      | Description         |
| ----------- | ------------------- |
| GET         | Retrieve data       |
| POST        | Create new resource |
| PUT / PATCH | Update resource     |
| DELETE      | Remove resource     |

> REST APIs commonly use **JSON** for data exchange, although REST itself is not limited to JSON.

---

## 🔌 API (Application Programming Interface)

An API allows different software systems to communicate and share data.

### API Communication Examples:

- Frontend ↔ Backend
- Backend ↔ Database
- Backend ↔ Backend (Microservices)
- Backend ↔ Third‑party services (payment, email, cloud)

APIs enable applications built with different programming languages to communicate using shared protocols such as **HTTP**.

---

## 🔐 Authentication Flow (JWT Based)

1. User sends login/register request
2. Server validates credentials
3. JWT token is generated
4. Token is sent to client
5. Client includes token in headers for protected routes
6. Middleware verifies token before granting access

---

## ⚙️ Environment Variables

Create a `.env` file using `.env.example` as reference:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Running the Project

```bash
npm install
npm run dev
```

Server will start on:

```
http://localhost:5000
```

---

## 📌 Best Practices Followed

- Separation of concerns (Routes, Controllers, Services)
- Centralized error handling
- Environment-based configuration
- Secure authentication using JWT
- Scalable folder structure

---

## 📈 Future Enhancements

- Product & Order modules
- Role-based access control
- Payment gateway integration
- API documentation (Swagger)
- Unit & integration testing

---

## 👨‍💻 Author

**Suraj Raut**
MERN Stack Developer

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
