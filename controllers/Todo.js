const Todo = require("../Model/Todo");
const getTodos = (req, res) => {
  res.send("I am the get todos route");
};

const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });
  todo.save()
  .then(todo => {
    res.json(todo);
  })
  .catch(err => {
    res.send(err);
  });
};

module.exports = {
  getTodos,
  createTodo,
};
