const Todo = require('../models/todomodel');
const TodoService = require('../services/todoservice');
const Boom = require('boom');
const mySocket = require('../socket');

mySocket.getIo().on('connection', function (socket) {
  TodoService.list()
    .then( (list) => {
      socket.emit('initial todos', list);
    }, () => {
      socket.emit('initial todos', []);
    });
});

module.exports = {
  list: function(request, reply){
    TodoService.list()
    .then((list) => {
        reply(list);
    },() => {
        reply(Boom.badImplementation(err)); // 500 error
    });

  },
  save: function(request, reply){
    var todo = new Todo();
    todo.description = request.payload.description;
    todo.save(function(err, todo) {
      if (!err) {
        mySocket.emitEvent('task added', todo);
        reply(todo).created('Ok'); // HTTP 201
      } else {
        reply(Boom.forbidden(err)); // HTTP 403
      }
    });
  },

  delete: function(request, reply){
    Todo.findById(request.params.id, (err, task)=>{
      if(task){
        task.remove()
          .then(()=>{
            reply()
          })
      }else {
        reply(Boom.notFound())
      }
    });
  }
};