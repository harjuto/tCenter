const Hapi = require('hapi');
const Inert = require('inert');
const db = require('./src/db');
const server = new Hapi.Server();
server.connection({port:8080});
server.register(Inert, () => {});
const socket = require('./src/socket').init(server);
const TodoRoutes = require('./src/routes/todos');

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

server.route(TodoRoutes);

server.start( () => {
	console.log('Server running at:', server.info.uri);
});
