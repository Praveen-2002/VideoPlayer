const mongoose = require("mongoose");

mongoose.connect("Connection String").then(()=>{
    console.log("Connected to DB successfully");
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose;