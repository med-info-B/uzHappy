const express = require('express');
var path = require('path');
const mongoose = require('mongoose')
const log = require('./config/logging');


const buzzRouter = require('./routes/buzzRouter');



const server  = (port, MongoUrl)  => {
    mongoose.connect(MongoUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
     })
     .then(() =>  log.info('DARABASE connected ...') )
     .catch((err) =>  log.info('not connect ...', err))

    const app = express();

    app.set('views', path.join(__dirname, 'views'));
    app.set("view engine", "pug");




    app.use(express.json());

    app.use('/', buzzRouter);


    // server 
    app.listen(port , () => { log.info(`connect server ...${port}`)})
}


module.exports = server;