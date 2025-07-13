# Product Inventory CRUD App

A simple backend application for managing a product inventory, built with Node.js, Express.js, and MongoDB using Mongoose ODM. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations through RESTful API endpoints.

---

## Features

- Create new products
- Read/list all products or a single product by ID
- Update product details
- Delete products
- Built using REST API principles

---

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/) (for development)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed
- MongoDB installed locally or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- Git installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iamkapilll/product-inventory-app.git
   cd product-inventory-app

2. Install dependencies:
    npm install

3. Create a .env file in the root directory and add your MongoDB connection string:
    MONGO_URI=your_mongodb_connection_string
    PORT=5000

4. Start the server:
    For development (with auto-restart):
        npm run dev
    For production:
        npm start  

5. The server will run on http://localhost:5000 by default.


# API Endpoints for Product Inventory App:

| HTTP Method | URL Path             | Request Data                                         | Description                                        |
| ----------- | -------------------- | ---------------------------------------------------- | -------------------------------------------------- |
| GET         | `/`                  | None                                                 | Render homepage                                    |
| GET         | `/products`          | Query param: `category` (optional)                   | List all products, optionally filtered by category |
| GET         | `/products/new`      | None                                                 | Render form to create a new product                |
| POST        | `/products`          | Request body (product data)                          | Create a new product with form data                |
| GET         | `/products/:id`      | URL param: `id`                                      | Show details of a single product                   |
| GET         | `/products/:id/edit` | URL param: `id`                                      | Render form to edit a product                      |
| PUT         | `/products/:id`      | URL param: `id`, request body (updated product data) | Update product details                             |
| DELETE      | `/products/:id`      | URL param: `id`                                      | Delete a product                                   |




# Usage:
  Use tools like Postman or Insomnia to test the API endpoints.



# License:
This project is licensed under the MIT License.


