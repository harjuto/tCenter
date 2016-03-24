const TodoService = require('./services/todoservice');

var io = undefined;

module.exports.init = function(server){
  if(!io){
    io = require('socket.io')(server.listener);
  }else{
    throw 'Io already initialized'
  }
};


module.exports.emitEvent = function(event,data){
  if(!io){
    throw 'Io not initialized'
  }
  console.log('Emitting:' + event + ' With - ' + data )
  io.sockets.emit(event, data)
};

module.exports.getIo = function(){
  if(!io){
    throw 'Io not initialized'
  }
  return io;
};