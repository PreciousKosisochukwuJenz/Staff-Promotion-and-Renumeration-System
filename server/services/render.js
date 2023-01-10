const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getSettings = (req, res) => {
  axios
    .get("http://localhost:3000/api/settings")
    .then(function (response) {
      res.render("settings", { data: response });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateSettings = (req, res) => {
  axios
    .put("http://localhost:3000/api/settings")
    .then(function (response) {
      res.render("settings", { message: response });
    })
    .catch((err) => {
      res.send(err);
    });
};
