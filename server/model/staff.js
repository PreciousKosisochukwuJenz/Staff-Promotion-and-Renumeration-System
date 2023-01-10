const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    StaffId : {
        type : String,
        required: true
    },
    gender : String,
})

const Staff = mongoose.model('Staff', schema);

module.exports = Staff;
