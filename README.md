#  Ecommerce-Cart Backend API

This project is the backend for the ShoppyGlobe e-commerce application built using Node.js, Express.js, MongoDB, and JWT authentication.

##  Features
- User Registration & Login (JWT Auth)
- Product Listing & Details
- Shopping Cart Management
- Secure API Routes
- MongoDB Integration

##  Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- ThunderClient

##  API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Products
- GET /api/products
- GET /api/products/:id

### Cart (Protected)
- POST /api/cart
- PUT /api/cart/:id
- DELETE /api/cart/:id

## How to Run
```bash
npm install
npm start
