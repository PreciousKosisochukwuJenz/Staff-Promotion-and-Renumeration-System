const express = require("express");
const route = express.Router();

const services = require("../services/render");
const UserCtrl = require("../controller/user.controller");
const SettingsCtrl = require("../controller/common.controller");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get("/add-user", services.add_user);

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get("/update-user", services.update_user);

/**
 *  @description settings
 *  @method GET /settings
 */
route.get("/settings", services.getSettings);

// API

//User
route.post("/api/users", UserCtrl.create);
route.get("/api/users", UserCtrl.find);
route.put("/api/users/:id", UserCtrl.update);
route.delete("/api/users/:id", UserCtrl.delete);

route.get("/api/settings", SettingsCtrl.find);
route.put("/api/settings", SettingsCtrl.update);

module.exports = route;
