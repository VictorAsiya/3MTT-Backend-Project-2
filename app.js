const express = require('express');
const itemsRoutes = require('./routes/items');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/items', itemsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use(errorHandler);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));