const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../Models/UserModel.js");
var router  = express.Router();

router.post("/register",(req,res)=>{
    var UserModel = mongoose.model("User",userSchema);
    var requestHeaders = req.headers;
    var user = new UserModel({
        name: requestHeaders.name,
        email: requestHeaders.email,
        password:  requestHeaders.password
    });
    
    user.save().then((savedRes)=>{
        res.status(200).json(savedRes);
    }).catch((err)=>{
        err.errorResponse.code == 11000 ?
             res.status(400).json({"Error":"An User with this Email already exits."})
            : res.status(500).json({"Error":"Soory Unable to Register the user right now. Please visit us again after Some time."})
    })
});

router.get("/login",(req,res)=>{
    var UserModel = mongoose.model("User",userSchema);
    res.json(UserModel.findOne({email : req.headers.email, password : req.headers.password}))
})

module.exports = router;