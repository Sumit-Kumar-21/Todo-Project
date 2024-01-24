const mongoose = require("mongoose");

function connetMongoose(url){
    return mongoose.connect(url);
}

module.exports = { connetMongoose }