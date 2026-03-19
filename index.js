require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.json({ message: 'My Week 2 API!' });
});

app.post('/user', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required!' });
  }

  res.json({ message: `Hello, ${name}!` });
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `User ${id} profile` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});