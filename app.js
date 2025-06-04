const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/items', itemsRouter);

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Central error handler
app.use(errorHandler);

module.exports = app;
