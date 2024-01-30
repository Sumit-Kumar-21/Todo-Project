const mongoose = require("mongoose");

function connetMongoose(url){
    return mongoose.connect(url).then(() => {
        console.log("Mongoo connected");
      });
}

module.exports = { connetMongoose }