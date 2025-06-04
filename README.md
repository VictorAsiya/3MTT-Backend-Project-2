# Express Items API

This is a simple RESTful API using Node.js and Express for managing items with in-memory storage.

## 🚀 Getting Started

```bash
npm install
npm start
```

## Running the app
The app runs on http://localhost:3000 by default.

## 🧪 API Testing

Use [Postman](https://postman.com) to test endpoints. Example Postman Collection is not included but sample outputs are shown below.

### Postman Collection
A sample Postman collection is provided in `postman_collection.json` for quick testing.

You can import it into Postman or Insomnia for immediate use.

### Sample POST /items
**Request**
```json
{
  "name": "Laptop",
  "description": "A lightweight device"
}
```

**Response**
```json
{
  "id": 1,
  "name": "Laptop",
  "description": "A lightweight device"
}
```

### Sample GET /items
**Response**
```json
[
  {
    "id": 1,
    "name": "Laptop",
    "description": "A lightweight device"
  }
]
```

### Sample PUT /items/1
**Request**
```json
{
  "description": "Updated description"
}
```

**Response**
```json
{
  "id": 1,
  "name": "Laptop",
  "description": "Updated description"
}
```

### Sample DELETE /items/1
**Response**
```json
{
  "id": 1,
  "name": "Laptop",
  "description": "Updated description"
}
```

## 🔁 Endpoints

- `GET /items` - Retrieve all items
- `GET /items/:id` - Retrieve a single item by ID
- `POST /items` - Create a new item (name & description required)
- `PUT /items/:id` - Update an existing item (optional name/description)
- `DELETE /items/:id` - Delete an item by ID

## 🛠 Features

- In-memory CRUD for items
- Each item has an `id`, `name`, and `description`
- Full error handling for 400, 404, 500 responses
- Sample API request/response examples

## 📄 License

MIT