console.log('Starting the Express application...');

// app.js
const express = require('express');
const bodyParser = require('body-parser');
const items = require('./fakeDb');

const app = express();

app.use(bodyParser.json());

// GET /items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json({ added: newItem });
});

// GET /items/:name
app.get('/items/:name', (req, res) => {
  const itemName = req.params.name;
  const foundItem = items.find(item => item.name === itemName);

  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// PATCH /items/:name
app.patch('/items/:name', (req, res) => {
  const itemName = req.params.name;
  const updatedData = req.body;

  const foundIndex = items.findIndex(item => item.name === itemName);

  if (foundIndex !== -1) {
    items[foundIndex] = { ...items[foundIndex], ...updatedData };
    res.json({ updated: items[foundIndex] });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// DELETE /items/:name
app.delete('/items/:name', (req, res) => {
  const itemName = req.params.name;
  const foundIndex = items.findIndex(item => item.name === itemName);

  if (foundIndex !== -1) {
    items.splice(foundIndex, 1);
    res.json({ message: 'Deleted' });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.listen(3000, () => {
  console.log("Server up 3000");
})
module.exports = app;
