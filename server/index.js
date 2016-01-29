const Hapi = require('hapi');
const Inert = require('inert');
const server = new Hapi.Server();

server.connection({port:8080});
server.register(Inert, () => {});

var todos = ['Im the first todo'];

const io = require('socket.io')(server.listener);

io.on('connection', function (socket) {
	socket.emit('initial todos', todos);
	socket.on('new todo', (data) => {
		socket.broadcast.emit(data);
	})
});

server.route({
	method: 'GET',
	path: '/{file*}',
	handler: {
        directory: {
            path: '../client/build',
                redirectToSlash: true,
                index: true
        }
	}
});

server.route({
	method: 'POST',
	path: '/api/addShoppingItem',
	handler: (req, reply) => {
		var todo = req.payload.text
		todos.push(todo);
		io.sockets.emit('new todo', todo);
		reply('ok')
	}
});


server.start( () => {
	console.log('Server running at:', server.info.uri);
});
