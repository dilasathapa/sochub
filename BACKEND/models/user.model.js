const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : {type : String, default : null, unique : true},
    password : {type : String, default : null},
    token : {type : String}
},{
    timestamps : true
});

module.exports = mongoose.model("user", userSchema);
