const express = require("express");
const ytdl = require("ytdl-core");
const router = express.Router();

router.get("/getVideo",async(req,res)=>{
    let data = await ytdl.getBasicInfo("https://www.youtube.com/watch?v=veILflY89eM&list=RDxuXnyTT7cDk&index=26");
    return res.send(data);
})

module.exports = router