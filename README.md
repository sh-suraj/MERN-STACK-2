# MERN stack ecommerce website

## EXPRESS

- Node.js web framework
- fast, unopinionated, minimalist web framework for Node.js
- used to create web app, apis, middlewares

# API Folder Structure for backend

root/

- package.json
- .env // private
- .env.config-d //for developers
- .gitignore
- node_modules/
- src/
  - server.js
  - app.js
  - routes/
    - authRoutes.js
  - services/
    - authServices.js
  - models/
    - auth.js
  - controllers/
    - authController.js
  - middleware/
    - authMiddleware.js
  - utils/
    - wtAuth.js
  - lib/
    - userType.js
  - helpers/
    - dataFormatter.js
  - constants/
    - roles.js
  - db/
    - db.js
