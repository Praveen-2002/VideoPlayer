const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../Models/UserModel.js");
var router  = express.Router();

router.get("/login",(req,res)=>{
    var UserModel = mongoose.model("User",userSchema);
    var user = new UserModel({
        name: "tester",
        email: "test1@db.com",
        password:  "testPassword"
    });
    
    user.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
});

router.get("/register",(req,res)=>{
    res.send("Registration. Route");
})

module.exports = router;