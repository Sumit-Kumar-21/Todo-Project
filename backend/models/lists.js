const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    itemName : String,
    amount: String,
    completed: Boolean
})

const list = mongoose.model('shopping-lists', listSchema)

module.exports = {
    list
}