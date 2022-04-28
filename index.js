const server = require('./app');
const config = require('./config/config');


server(config.server.port, config.mongo.url);








