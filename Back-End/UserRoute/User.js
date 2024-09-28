const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require("../Models/UserModel.js");
const testModel = require("../Models/TestModel.js");
const auth = require("../Middleware/Auth.js")
var router  = express.Router();

const salt = 9;

router.post("/register",async(req,res)=>{
    var UserModel = mongoose.model("User",userSchema);
    var requestHeaders = req.headers;
    var user = new UserModel({
        name: requestHeaders.name,
        email: requestHeaders.email,
        password: await bcrypt.hash(requestHeaders.password,salt)
    });
    
    user.save().then((savedRes)=>{
        res.status(200).json({"msg":"Success", "status":200});
    }).catch((err)=>{
        try{
            err.errorResponse.code == 11000 ?
                 res.status(400).json({"msg":"An User with this Email already exits.", "status":400})
                : res.status(500).json({"msg":"Sorry Unable to Register the user right now. Please visit us again after Some time.","status":500})
        }catch(e){
            res.status(400).json({"msg":err._message, "status":400});
        }
    })
});

router.get("/login",async(req,res)=>{
    var UserModel = mongoose.model("User",userSchema);

    UserModel.findOne({email : req.headers.email}).then((user_data)=>{ 
        bcrypt.compare(req.headers.password,user_data.password,function(err,valid){
            
            if(valid){
                var authToken = jwt.sign(user_data._id.toString(),"authToken");
                res.cookie("Auth",authToken) // TODO : Make cookie expire after some time. Currently it will stay still the session
                res.status(200).json({userName:user_data.name,msg:"Success",status:200})
            }
        })
    }).catch((e)=>{
        res.status(400).json({msg:"No user with this email id","status":400});
    })
})

router.get("/isValidUser",async(req,res)=>{
    let authCookie = req.cookies["Auth"];
    let isValid = false
    if (authCookie){
        isValid = jwt.verify(authCookie,"authToken")
    }
    return isValid ? res.status(201).json({msg:"Valid user","status":201}) : res.status(401).json({msg:"Not a valid user","status":401})
})

module.exports = router;