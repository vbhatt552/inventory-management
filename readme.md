# Inventory Management System API

This is a robust RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing a small-to-medium-scale inventory. It provides full CRUD (Create, Read, Update, Delete) functionality for products, categories, and suppliers.

## Features

* **Complete CRUD:** Manage products, categories, and suppliers with dedicated endpoints.

* **MongoDB with Mongoose:** Uses Mongoose for elegant schema design and robust data modeling.

* **Relational Data:** Products are linked to categories and suppliers, demonstrating one-to-many relationships.

* **Data Validation:** Uses Mongoose schema validators to ensure data integrity on both create and update operations.

* **Error Handling:** Provides clear and specific HTTP status codes and JSON responses for successful requests (e.g., `200 OK`, `201 Created`) and various errors (`400 Bad Request`, `404 Not Found`).

* **Modular Code Structure:** Follows a clean `Model-Controller-Route` pattern for a scalable and maintainable codebase.

## API Endpoints

| **HTTP Method** | **Endpoint** | **Description** |
| :--- | :--- | :--- |
| **Products** | | |
| `POST` | `/api/products` | Create a new product. |
| `GET` | `/api/products` | Get a list of all products. |
| `GET` | `/api/products/:id` | Get a single product by its ID. |
| `PUT` | `/api/products/:id` | Update a product by its ID. |
| `DELETE` | `/api/products/:id` | Delete a product by its ID. |
| **Categories** | | |
| `POST` | `/api/categories` | Create a new category. |
| `GET` | `/api/categories` | Get a list of all categories. |
| `PUT` | `/api/categories/:id` | Update a category by its ID. |
| `DELETE` | `/api/categories/:id` | Delete a category by its ID. |

## Installation & Setup

1.  Clone this repository.

2.  Install dependencies: `npm install`

3.  Set up your MongoDB Atlas cluster and get the connection string.

4.  Create a `.env` file in the root directory and add your connection URI.

    ```
    MONGO_URI=your_mongodb_atlas_connection_string

    ```

5.  Run the server: `node server.js`

Feel free to contribute, open issues, or suggest new features!