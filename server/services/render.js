const axios = require("axios");

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
  const authUser = req.user;

  res.render("user", {
    settings: settings.data,
    users: users.data.users,
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
