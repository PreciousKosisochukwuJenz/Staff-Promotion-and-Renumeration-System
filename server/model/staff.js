const mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    staffId: {
      type: String,
      required: true,
    },
    staffType: {
      type: String,
    },
    gender: {
      type: String,
    },
    designation: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Designation",
      required: true,
    },
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", schema);

module.exports = Staff;
