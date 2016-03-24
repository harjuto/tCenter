const TodoHandlers = require('../handlers/todos');

module.exports = [
  {
    method: 'GET',
    path: '/api/tasks',
    handler: TodoHandlers.list
  },
  {
    method: 'POST',
    path: '/api/tasks',
    handler: TodoHandlers.save
  },
  {
    method: 'DELETE',
    path: '/api/tasks/{id}',
    handler: TodoHandlers.delete
  },
];