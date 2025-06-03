const express = require('express');
const usersRoutes = require('./routes/users');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express API!');
});

app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use(errorHandler);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));