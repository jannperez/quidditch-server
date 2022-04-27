const mongoose = require('mongoose')
const Schema = mongoose.Schema


const houses = new Schema ({
    House_Name: {type: String, required: true},
    House_Banner: {type: String, required: true},
    Teacher: {type: String, required: true}, 
    Team: {type: String, required: true},
})
module.exports = mongoose.model('Houses', houses)