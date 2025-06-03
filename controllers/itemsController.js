let items = [];
let idCounter = 1;

exports.getItems = (req, res) => {
  res.json(items);
};

exports.getItem = (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
};

exports.createItem = (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = { id: idCounter++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
  const { name, description } = req.body;
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  if (!name && !description) {
    return res.status(400).json({ error: 'At least name or description must be provided' });
  }

  if (name) item.name = name;
  if (description) item.description = description;

  res.json(item);
};

exports.deleteItem = (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
};