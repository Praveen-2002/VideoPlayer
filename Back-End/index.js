var user = require("./UserRoute/User.js");
const connect = require("./DBConnect.js");
const express = require("express");
const cors = require("cors");
var app = express();

app.use(cors());
app.use("/user",user);
app.get("/",(req,res)=>{
    res.send("route working fine");
})
app.get("/check",(req,res)=>{
    res.send("Checked")
})

app.listen(2000,()=>{
    console.log("server at 2000");
})