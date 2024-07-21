const { type } = require("@testing-library/user-event/dist/type");

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email : {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },

    password : {
        type: String,
        required: true
    },

    cratedAt : {
        type: Date,
        default: Date.now
    }
}, {collection: "User"})

module.exports = userSchema
