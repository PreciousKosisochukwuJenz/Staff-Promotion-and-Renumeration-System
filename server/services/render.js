const axios = require("axios");

exports.homeRoutes = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  res.render("index", { settings: settings.data, title: "Home" });
};

exports.getSettings = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  res.render("settings", { settings: settings.data, title: "Settings" });
};

exports.updateSettings = async (req, res) => {
  await axios.put("http://localhost:3000/api/settings");
  const settings = await axios.get("http://localhost:3000/api/settings");

  res.render("settings", { settings: settings.data, title: "Settings" });
};

exports.login = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  res.render("login", { settings: settings.data, title: "Login" });
};

exports.getUsers = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const users = await axios.get("http://localhost:3000/api/users");
  res.render("user", {
    settings: settings.data,
    users: users.data.users,
    title: "Users",
  });
};

exports.getRoles = async (req, res) => {
  const settings = await axios.get("http://localhost:3000/api/settings");
  const roles = await axios.get("http://localhost:3000/api/roles");
  res.render("roles", {
    settings: settings.data,
    roles: roles.data.roles,
    title: "Roles",
  });
};
