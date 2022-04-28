exports.formValidator = (req, res, next) => {
    const schema = Joi.object({
        nbre1: Joi.number().min(1).max(1000).required(),
        nbre2: Joi.number().min(1).max(1000).required(),
    })
    const { error, value} = schema.validate(req.query);
    if(error){
        res.status(400).send(error.details[0].message);
    }

    if(value.nbre1 > value.nbre2 ){
        res.status(400).send('le premier  nombre doit etre inferieur au deuxième');
    }
}