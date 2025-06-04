const express = require('express');
const app = express();
const itemsRoutes = require('./routes/items');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/api/items', itemsRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
