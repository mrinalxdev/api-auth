const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        username : {type : String, require : true},
        email : {type : String, require : true},
        password : {type : String, require : true},
        role : {
            type : String,
            enum : ["admin", "instructor", "student"],
            default : "student"
        },
        lastLogin : Date,
    },
    {
        timeseries : true,
    }
)

module.exports = mongoose.model("User", userSchema)