const User = require("../model/user");
const Role = require("../model/role");

const bcrypt = require("bcrypt");
exports.fetch = async (req, res) => {
  const users = await User.find({});
  res.status(200).send({ message: "Request successfully", users });
};

exports.create = async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const passwordSalt = req.body.passwordSalt;

  if (password !== passwordSalt)
    res.status(500).send({ message: "Password does not match" });
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);
  const newUser = new User({
    email: email,
    username: username,
    password: hash,
  });
  await newUser.save();
  res.status(201).send({ message: "User added successfully", user: newUser });
};

exports.get = async (req, res) => {
  const user = await User.findById(req.params.id).select(["username", "email"]);
  if (!user) console.error("No user found");
  res.status(200).send({ message: "Request successfully", user });
};

exports.update = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const id = req.params.id;

  let query = { _id: id };

  let model = {
    username: username,
    email: email,
  };
  const user = await User.update(query, model);
  res.status(200).send({ message: "Request successfully", user });
};

exports.delete = async (req, res) => {
  let query = { _id: req.params.id };
  const user = await User.remove(query);
  res.status(200).send({ message: "Request successfully", user });
};

exports.fetchRoles = async (req, res) => {
  const roles = await Role.find({});
  res.status(200).send({ message: "Request successfully", roles });
};

exports.createRole = async (req, res) => {
  const description = req.body.description;

  const newRole = new Role({
    description,
  });
  await newRole.save();
  res.status(201).send({ message: "User added successfully", user: newRole });
};

exports.getRole = async (req, res) => {
  const role = await Role.findById(req.params.id);
  if (!role) console.error("No user found");
  res.status(200).send({ message: "Request successfully", role });
};

exports.updateRole = async (req, res) => {
  const description = req.body.description;
  const id = req.params.id;

  let query = { _id: id };

  let model = {
    description,
  };
  const role = await Role.update(query, model);
  res.status(200).send({ message: "Request successfully", role });
};

exports.deleteRole = async (req, res) => {
  let query = { _id: req.params.id };
  const role = await Role.remove(query);
  res.status(200).send({ message: "Request successfully", role });
};
