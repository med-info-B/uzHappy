
const Buzz = require('../models/buzz');
const log = require('../config/logging');


/**
 * Method has as reponsabilite to injecte data in db
 * @param { } req 
 * @param {*} res 
 */
exports.save = (req, res) => {
    const {nbre1, nbre2} = req.query;
    const  buzz = {
        nombreDebut: nbre1,
        nombreFin: nbre2,
    }
    const buzzCreated = new Buzz(buzz);
    buzzCreated.save((err, value) => {
        if(err){
            log.info('Error to write in db')
        } else {
            log.info('Success to write in db');
        }
    })
}
/**
 * Method has as responsability to handle  
 * @param {*} req 
 * @param {*} res 
 */
exports.handleNumber = (req, res) => {
    const {nbre1, nbre2} = req.query;
    var resultat = [];
    for (let index = nbre1; index <= nbre2; index++) {
        if(((index % 5) == 0) && ((index % 3)  == 0 ) ){
            resultat.push({text: "NIM buzz"})
        }
       
        else if((index % 5) == 0){
            resultat.push({text: "Buzz"})
        }
        else if((index % 3)  == 0 ){
            resultat.push({text: "NIM"})
        }   
        else {
            resultat.push({text: `${index}`})
        }    
    }  

    res.render('result', {numbers: resultat,originalUrl: 'home'});
    log.info('Success to calculate result');

}
