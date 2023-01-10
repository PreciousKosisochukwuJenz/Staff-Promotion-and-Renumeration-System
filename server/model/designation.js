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
    salary : {
        type: String,
        required: false,
    },
    level : {
        type: String,
        required: false,
    },
    department:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Department',
        required: true
    }
}, {timestamps:true})

const Permission = mongoose.model('Permission', schema);

module.exports = Permission;
