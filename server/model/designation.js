const mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    salary: {
      type: String,
      required: false,
    },
    staffType: {
      type: String,
      required: false,
    },
    department: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Department",
      required: true,
    },
    benefits: [
      {
        benefit: String,
        amount: String,
      },
    ],
  },
  { timestamps: true }
);

const Designation = mongoose.model("Designation", schema);

module.exports = Designation;
