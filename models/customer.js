const mongoose = require('mongoose')

const schema = mongoose.Schema
const model = schema.bind(mongoose)
const ObjectId = mongoose.Schema.Types.ObjectId;
const customer = schema({
    id:ObjectId,
    name:String,
    address:String,
    dob:String,
    email:String,    
})

module.exports = customer;