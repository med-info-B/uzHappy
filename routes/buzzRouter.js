const express = require('express');
const Joi = require('joi');

const {save, handleNumber} = require('../controllers/buzzController')
const log = require('../config/logging');


const router = express.Router();

router.get('', (req, res) => {
    res.render('home');
})


router.get('/handleForm', async (req, res) => {
    const schema = Joi.object({
        nbre1: Joi.number().min(1).max(1000).required(),
        nbre2: Joi.number().min(1).max(1000).required(),
    })
    const { error, value} = schema.validate(req.query);
    if(error){
        res.status(400).send(error.details[0].message);
        log.info('Error when we receive data: ', error.details[0].message)
    }

    if(value.nbre1 > value.nbre2 ){
        res.status(400).send('le premier  nombre doit etre inferieur au deuxième');
        log.info('number Order error !! you need to change the order')
    } else {
         // register in DataBase
         await save(req, res);
        // Handler the numbers between 1 and 1000
        await handleNumber(req, res);
    }
   


})

module.exports = router;