const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Wand = new Schema ({
    age_restriction: {type: String, required: true},
    wand_material: {type: String, required: true},
    access_to_magic: {type: String, required: true},
    
})
module.exports = mongoose.model('Wands', Wand)