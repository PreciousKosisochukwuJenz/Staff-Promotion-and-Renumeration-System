const Staff = require("../model/staff");
const Department = require("../model/department");
const Designation = require("../model/designation");
const { getAbbrev } = require("../utils/utils");

exports.fetchStaffs = async (req, res) => {
  let staffs = await Staff.find({}).populate("designation");
  staffs = staffs.map((staff) => {
    const abbrev = getAbbrev(staff.name);
    return { ...staff._doc, abbrev };
  });
  res.status(200).send({ message: "Request successfully", staffs });
};

exports.createStaff = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const staffType = req.body.staffType;
  const designation = req.body.designation;
  const staffs = await Staff.find({});
  const newStaff = new Staff({
    name,
    email,
    staffId: `STAFF/00${staffs.length + 1}`,
    staffType,
    designation,
  });
  await newStaff.save();
  res
    .status(201)
    .send({ message: `Staff "${name} added successfully"`, staff: newStaff });
};

exports.getStaff = async (req, res) => {
  const staff = await Staff.findById(req.params.id);
  if (!staff) console.error("No user found");
  res.status(200).send({ message: "Request successfully", staff });
};

exports.updateStaff = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const staffType = req.body.staffType;
  const designation = req.body.designation;
  const id = req.params.id;
  let query = { _id: id };

  let model = {
    name,
    email,
    staffType,
    designation,
  };
  const staff = await Staff.updateOne(query, model);
  res
    .status(200)
    .send({ message: `Staff "${name} updated successfully"`, staff });
};

exports.deleteStaff = async (req, res) => {
  let query = { _id: req.params.id };
  const staff = await Staff.remove(query);
  res.status(200).send({
    message: `Staff with id "${req.params._id}" deleted successfully`,
    staff,
  });
};

exports.fetchDepartments = async (req, res) => {
  let departments = await Department.find({});
  departments = departments.map((department) => {
    const abbrev = getAbbrev(department.title);
    return { ...department._doc, abbrev };
  });
  res.status(200).send({ message: "Request successfully", departments });
};

exports.createDepartment = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const newDepartment = new Department({
    title,
    description,
  });
  await newDepartment.save();
  res.status(201).send({
    message: `Department "${title}" added successfully`,
    department: newDepartment,
  });
};

exports.getDepartment = async (req, res) => {
  const department = await Department.findById(req.params.id);
  if (!department) console.error("No department found");
  res.status(200).send({ message: "Request successfully", department });
};

exports.updateDepartment = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const id = req.params.id;
  let query = { _id: id };

  let model = {
    title,
    description,
  };
  const department = await Department.updateOne(query, model);
  res.status(200).send({
    message: `Department "${title}" updated successfully`,
    department,
  });
};

exports.deleteDepartment = async (req, res) => {
  let query = { _id: req.params.id };
  const department = await Department.remove(query);
  res.status(200).send({
    message: `Department with id "${req.params.id}" deleted successfully`,
    department,
  });
};

exports.fetchDesignation = async (req, res) => {
  let designations = await Designation.find({}).populate("department");
  designations = designations.map((designation) => {
    const abbrev = getAbbrev(designation.title);
    return { ...designation._doc, abbrev };
  });
  res.status(200).send({ message: "Request successfully", designations });
};

exports.createDesignation = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const salary = req.body.salary;
  const department = req.body.department;
  const staffType = req.body.staffType;
  const benefits = req.body.benefits;
  const newDesignation = new Designation({
    title,
    description,
    salary,
    department,
    staffType,
    benefits,
  });
  await newDesignation.save();
  res.status(201).send({
    message: `Designation "${title}" added successfully`,
    designation: newDesignation,
  });
};

exports.getDesignation = async (req, res) => {
  const id = req.params.id;
  const designation = await Designation.findById(id);
  if (!designation) console.error("No designation found");
  res.status(200).send({ message: "Request successfully", designation });
};

exports.updateDesignation = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const salary = req.body.salary;
  const department = req.body.department;
  const staffType = req.body.staffType;
  const benefits = req.body.benefits;
  const id = req.params.id;
  let query = { _id: id };

  let model = {
    title,
    description,
    salary,
    department,
    staffType,
    benefits,
  };
  const designation = await Designation.updateOne(query, model);
  res.status(200).send({
    message: `Designation "${title}" updated successfully`,
    designation,
  });
};

exports.deleteDesignation = async (req, res) => {
  let query = { _id: req.params.id };
  const designation = await Designation.remove(query);
  res.status(200).send({
    message: `Designation with id "${req.params.id}" deleted successfully`,
    designation,
  });
};

exports.getStaffById = async (req, res) => {
  const staff = await Staff.findOne({ staffId: req.params.staffId  });
  if (!staff) console.error("No user found");
  res.status(200).send({ message: "Request successfully", staff });
};
