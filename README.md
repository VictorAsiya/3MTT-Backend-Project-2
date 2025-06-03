# Express.js REST API

## Setup

```bash
npm install
node app.js
```

## Endpoints

### `GET /api/users`
Returns all users.

### `GET /api/users/:id`
Returns a single user by ID.

### `POST /api/users`
Creates a new user. Requires JSON body:
```json
{
  "name": "John",
  "email": "john@example.com"
}
```

### `PUT /api/users/:id`
Updates an existing user.

### `DELETE /api/users/:id`
Deletes a user.

## Error Handling
- 400 for bad input
- 404 for not found
- 500 for server errors

## Testing
Use [Postman](https://postman.com) to test endpoints.