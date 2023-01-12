const axios = require("axios");
const { Benefits } = require("../model/enums");

exports.homeRoutes = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const authUser = req.user;
  res.render("index", { settings: settings.data, authUser, title: "Home" });
};

exports.getSettings = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const authUser = req.user;
  res.render("settings", {
    settings: settings.data,
    authUser,
    title: "Settings",
  });
};

exports.updateSettings = async (req, res) => {
  await axios.put("http://localhost:3000/api/settings");
  const settings = await axios.get("http://localhost:3000/api/settings");
  const authUser = req.user;

  res.render("settings", {
    settings: settings.data,
    authUser,
    title: "Settings",
  });
};

exports.login = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const authUser = req.user;

  res.render("login", { settings: settings.data, authUser, title: "Login" });
};

exports.getUsers = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const users = await axios.get("http://localhost:3000/api/users");
  const roles = await axios.get("http://localhost:3000/api/roles");
  const authUser = req.user;
  res.render("user", {
    settings: settings.data,
    users: users.data.users,
    roles,
    authUser,
    title: "Users",
  });
};

exports.getRoles = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const roles = await axios.get("http://localhost:3000/api/roles");
  const authUser = req.user;

  res.render("roles", {
    settings: settings.data,
    roles: roles.data.roles,
    authUser,
    title: "Roles",
  });
};

exports.getStaffs = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const staffs = await axios.get("http://localhost:3000/api/staffs");
  const designations = await axios.get(
    "http://localhost:3000/api/designations"
  );
  const authUser = req.user;

  res.render("staffs", {
    settings: settings.data,
    staffs: staffs.data.staffs,
    designations: designations.data.designations,
    authUser,
    title: "Staffs",
  });
};

exports.getDepartments = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const departments = await axios.get("http://localhost:3000/api/departments");
  const authUser = req.user;

  res.render("departments", {
    settings: settings.data,
    departments: departments.data.departments,
    authUser,
    title: "Departments",
  });
};

exports.getDesignations = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const departments = await axios.get("http://localhost:3000/api/departments");
  const designations = await axios.get(
    "http://localhost:3000/api/designations"
  );
  const benefits = Benefits;
  const authUser = req.user;

  res.render("designations", {
    settings: settings.data,
    departments: departments.data.departments,
    designations: designations.data.designations,
    benefits: Object.values(benefits),
    authUser,
    title: "Designations",
  });
};

exports.getPromotions = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const designations = await axios.get(
    "http://localhost:3000/api/designations"
  );
  const authUser = req.user;

  res.render("promotions", {
    settings: settings.data,
    designations: designations.data.designations,
    authUser,
    title: "Promotions",
  });
};
