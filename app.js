const express = require('express');
const itemsRoutes = require('./routes/items');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Items API!');
});

// Use /items routes
app.use('/items', itemsRoutes);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use(errorHandler);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
