# Inventory Management System API

This is a robust and scalable RESTful API for managing an inventory. It is built with **Node.js**, **Express**, and **MongoDB**, and follows a clean, modular architecture. The API provides a complete set of CRUD (Create, Read, Update, Delete) operations for multiple resources, with a focus on data integrity and clear error handling.

## Key Features

* **Complete CRUD:** Full functionality to manage four core entities: Products, Categories, Suppliers, and Inventory Transactions.
* **Relational Data Modeling:** Products are linked to Categories and Suppliers using Mongoose relationships, demonstrating a fundamental backend concept.
* **Inventory Transactions:** A dedicated model for tracking every stock change (`IN` and `OUT`), ensuring a complete audit trail and accurate stock levels.
* **Robust Data Validation:** The API uses Mongoose schema validators to enforce data types, required fields, and unique values, preventing bad data from entering the database.
* **Modular Architecture:** Organized using the **Model-Controller-Route** pattern for clean separation of concerns, making the codebase easy to maintain and scale.
* **Comprehensive Error Handling:** Provides descriptive HTTP status codes and JSON responses for successful operations (`201 Created`, `200 OK`) and various errors (`400 Bad Request`, `404 Not Found`).

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Environment:** Dotenv

## API Endpoints

The API is structured with base paths for each resource. All endpoints are prefixed with `/api`.

| **HTTP Method** | **Endpoint** | **Description** |
| :--- | :--- | :--- |
| **Products** | | |
| `POST` | `/api/products` | Create a new product. |
| `GET` | `/api/products` | Get a paginated list of all products. |
| `GET` | `/api/products/:id` | Get a single product by its ID, with category and supplier data. |
| `PUT` | `/api/products/:id` | Update a product's details. |
| `DELETE` | `/api/products/:id` | Delete a product. |
| **Categories** | | |
| `POST` | `/api/categories` | Create a new category. |
| `GET` | `/api/categories` | Get a list of all categories. |
| `PUT` | `/api/categories/:id` | Update a category. |
| `DELETE` | `/api/categories/:id` | Delete a category. |
| **Suppliers** | | |
| `POST` | `/api/suppliers` | Create a new supplier. |
| `GET` | `/api/suppliers` | Get a list of all suppliers. |
| `GET` | `/api/suppliers/:id` | Get a single supplier by its ID. |
| `PUT` | `/api/suppliers/:id` | Update a supplier. |
| `DELETE` | `/api/suppliers/:id` | Delete a supplier. |
| **Transactions** | | |
| `POST` | `/api/transactions` | Record a new stock transaction (`IN` or `OUT`). |
| `GET` | `/api/transactions` | Get a list of all transactions. |
| `GET` | `/api/transactions/:id` | Get a single transaction by its ID. |

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install express mongoose dotenv
    ```

3.  **Set up MongoDB Atlas:**
    * Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
    * Create a new user and whitelist your IP address.
    * Get your connection string.

4.  **Create a `.env` file:**
    * In the root directory, create a file named `.env` and paste your connection string.
    ```
    MONGO_URI=your_mongodb_atlas_connection_string
    PORT=5000
    ```

5.  **Run the server:**
    ```bash
    node server.js
    ```

    ---

## Future Improvements

This project provides a strong foundation. Here are some key features and improvements that could be added to make the API more robust and production-ready:

* **User Authentication & Authorization:** Implement user registration, login, and secure sessions using **JWT (JSON Web Tokens)**. This would allow you to protect your API endpoints.
* **Role-Based Access Control (RBAC):** Create different user roles (e.g., `admin`, `manager`, `viewer`) and define specific permissions for each. For example, only an `admin` could delete a product.
* **Advanced Filtering & Pagination:** Add query parameters to your `GET` endpoints to allow for advanced searching, filtering (by category, supplier), and pagination for better performance on large datasets.
* **Unit & Integration Testing:** Implement a testing suite with frameworks like **Jest** and **Supertest** to ensure all API endpoints and business logic are working correctly and don't break with future changes.
* **Logging:** Add a logging library like **Winston** or **Morgan** to track all requests, errors, and significant events, which is crucial for monitoring and debugging a live application.