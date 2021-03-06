const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));

const todoList = [
  {
    id: 1,
    description: 'Implement a REST API',
  },
  {
    id: 2,
    description: 'Build a frontend',
  },
  {
    id: 3,
    description: '???',
  },
  {
    id: 4,
    description: 'Profit!',
  },
];

// GET /api/todos

// GET /api/todos/:id

// POST /api/todos

// PUT /api/todos/:id

// DELETE /api/todos/:id

app.listen(3000, function () {
  console.log('Todo List API is now listening on port 3000...');
});
