const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Patronus = new Schema ({
    wand: {type: Schema.Types.ObjectId, ref:"Wands"},
    protection: {type: String, required: true},
    
    
})
module.exports = mongoose.model('Patronoses', Patronus)