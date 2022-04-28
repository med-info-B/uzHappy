



const dotenv = require('dotenv');

dotenv.config();



const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME  || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;


const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/testUzhappy';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
}

const MONGO = {
    url: MONGO_URL
}




const config = {
    server: SERVER,
    mongo: MONGO,
}


module.exports = config;
