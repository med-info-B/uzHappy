const mongoose = require('mongoose')
const buzzSchema = new mongoose.Schema({
    nombreDebut :{
        type: Number,
        trim: true,
        required: true,
    },

    nombreFin :{
        type: Number,
        trim: true,
        required: true,
    },

},{timestamps :true })





module.exports = mongoose.model('Buzz', buzzSchema)