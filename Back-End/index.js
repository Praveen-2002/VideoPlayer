var user = require("./UserRoute/User.js");
const connect = require("./DBConnect.js");
const express = require("express");
var app = express();

app.use("/user",user);
app.get("/",(req,res)=>{
    res.send("route working fine");
})

app.listen(2000,()=>{
    console.log("server at 2000");
})