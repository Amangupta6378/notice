const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:["Admin", "teacher", "student"]
     },
    batch:{
        type:String,
        enum:["Uniques 1.0", "Uniques 2.0", "Super60"]
    }
})

module.exports = mongoose.model("users", userSchema);