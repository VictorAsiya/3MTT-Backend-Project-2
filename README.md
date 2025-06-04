# Express API Project

## Overview
A simple Express.js RESTful API with in-memory storage for managing items.

## Features
- Full CRUD (Create, Read, Update, Delete) functionality for items
- In-memory storage (no database)
- Centralized error handling
- 404 not found middleware
- Modular structure
- Postman collection for easy API testing

## Project Structure

```
express-api-project/
├── app.js
├── routes/
│   └── items.js
├── middleware/
│   └── errorHandler.js
├── postman_collection.json
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Running the App

```bash
# For production
npm start

# For development (auto-restarts)
npm run dev
```

## API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | /items           | Get all items           |
| GET    | /items/:id       | Get item by ID          |
| POST   | /items           | Create a new item       |
| PUT    | /items/:id       | Update an existing item |
| DELETE | /items/:id       | Delete an item          |

## Request & Response Examples

### Create Item (POST /items)
**Request Body**
```json
{
  "name": "Item A",
  "description": "Description of Item A"
}
```

**Response**
```json
{
  "id": 1,
  "name": "Item A",
  "description": "Description of Item A"
}
```

### Error Example (404)
```json
{
  "error": {
    "message": "Item not found",
    "status": 404
  }
}
```

## Postman Collection
A complete Postman collection is provided: `postman_collection.json`

1. Import it into Postman.
2. Use the collection to test all endpoints.
3. Set `base_url` environment variable (e.g., `http://localhost:3000`).

---

Enjoy building with Express.js!
