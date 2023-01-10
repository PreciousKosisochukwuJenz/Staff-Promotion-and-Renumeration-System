const express = require("express");
const route = express.Router();
const passport = require("passport");

const services = require("../services/render");
const AuthCtrl = require("../controller/auth.controller");
const UserCtrl = require("../controller/user.controller");
const SettingsCtrl = require("../controller/common.controller");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", services.homeRoutes);

/**
 *  @description Login Route
 *  @method GET /
 */
route.get("/auth/login", services.login);

/**
 *  @description settings page
 *  @method GET /settings
 */
route.get("/settings", services.getSettings);

/**
 *  @description user page
 *  @method GET /users
 */
route.get("/users", services.getUsers);

/**
 *  @description user page
 *  @method GET /users
 */
route.get("/roles", services.getRoles);
// API

//User
route.get("/api/users", UserCtrl.fetch);
route.post("/api/users", UserCtrl.create);
route.get("/api/users/:id", UserCtrl.get);
route.put("/api/users/:id", UserCtrl.update);
route.delete("/api/users/:id", UserCtrl.delete);

//Role
route.get("/api/roles", UserCtrl.fetchRoles);
route.post("/api/roles", UserCtrl.createRole);
route.get("/api/roles/:id", UserCtrl.getRole);
route.put("/api/roles/:id", UserCtrl.updateRole);
route.delete("/api/roles/:id", UserCtrl.deleteRole);

// Settings
route.get("/api/settings", SettingsCtrl.find);
route.put("/api/settings", SettingsCtrl.update);

// Auth
route.post("/auth/login", AuthCtrl.postLogin);
route.get("/auth/logout", AuthCtrl.logout);

module.exports = route;
