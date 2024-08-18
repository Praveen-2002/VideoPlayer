const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/VideoApp").then(()=>{
    console.log("Connected to DB successfully");
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose;