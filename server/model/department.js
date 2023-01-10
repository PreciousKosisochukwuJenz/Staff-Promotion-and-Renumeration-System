const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: false,
    },
}, {timestamps:true})

const Department = mongoose.model('Department', schema);

module.exports = Department;
