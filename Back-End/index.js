var user = require("./UserRoute/User.js");
const connect = require("./DBConnect.js");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
var app = express();

app.use(cors({
    origin: 'http://localhost:3000', // React frontend URL
    credentials: true
}));
app.use(cookieParser());
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