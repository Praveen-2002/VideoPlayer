const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    roleNumber:{
        type:Number
    }
},{collation:"Test"})

testModel = mongoose.model("Test",testSchema);
module.exports = testModel;