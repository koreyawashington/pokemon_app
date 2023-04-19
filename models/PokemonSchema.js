const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
    name: {
        type:String,
        required: false
    },
    img: {
        type:String,
        required: false
    }
})


const Pokemon = mongoose.model('Pokemon', PokemonSchema)

module.exports = Pokemon;