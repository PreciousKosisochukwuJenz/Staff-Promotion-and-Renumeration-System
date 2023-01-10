const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true
    },
    isActive:Boolean
})

const User = mongoose.model('User', schema);

module.exports = User;
