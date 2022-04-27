const mongoose = require('mongoose')
const Schema = mongoose.Schema


const student = new Schema ({
    name: {type: String, required: true},
    age: {type: String, required: true},
    race: {type: String, required: true},
    house: {type: Schema.Types.ObjectId, ref:"Houses"},
    patronus: {type: Schema.Types.ObjectId, ref:"Patronoses"},
    wands: {type: Schema.Types.ObjectId, ref:"Wands"},
    teams: {type: Schema.Types.ObjectId, ref:"Teams"},
    position: {type: Schema.Types.ObjectId, ref: "Position"},
    
})
module.exports = mongoose.model('Students', student)