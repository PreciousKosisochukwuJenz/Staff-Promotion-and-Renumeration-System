const express = require("express");
const route = express.Router();
const passport = require("passport");

const services = require("../services/render");
const AuthCtrl = require("../controller/auth.controller");
const UserCtrl = require("../controller/user.controller");
const StaffCtrl = require("../controller/staff.controller");
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
 *  @description roles page
 *  @method GET /roles
 */
route.get("/roles", services.getRoles);

/**
 *  @description staffs page
 *  @method GET /staffs
 */
route.get("/staffs", services.getStaffs);

/**
 *  @description Departments page
 *  @method GET /departments
 */
route.get("/departments", services.getDepartments);

/**
 *  @description Designation page
 *  @method GET /designations
 */
route.get("/designations", services.getDesignations);

/**
 *  @description Promotions page
 *  @method GET /promotions
 */
route.get("/promotions", services.getPromotions);
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

//Staff
route.get("/api/staffs", StaffCtrl.fetchStaffs);
route.post("/api/staffs", StaffCtrl.createStaff);
route.get("/api/staffs/:id", StaffCtrl.getStaff);
route.post("/api/staffs/byId", StaffCtrl.getStaffById);
route.put("/api/staffs/promote/:id", StaffCtrl.promoteStaff);
route.put("/api/staffs/:id", StaffCtrl.updateStaff);
route.delete("/api/staffs/:id", StaffCtrl.deleteStaff);

//Department
route.get("/api/departments", StaffCtrl.fetchDepartments);
route.post("/api/departments", StaffCtrl.createDepartment);
route.get("/api/departments/:id", StaffCtrl.getDepartment);
route.put("/api/departments/:id", StaffCtrl.updateDepartment);
route.delete("/api/departments/:id", StaffCtrl.deleteDepartment);

//Designation
route.get("/api/designations", StaffCtrl.fetchDesignation);
route.post("/api/designations", StaffCtrl.createDesignation);
route.get("/api/designations/:id", StaffCtrl.getDesignation);
route.put("/api/designations/:id", StaffCtrl.updateDesignation);
route.delete("/api/designations/:id", StaffCtrl.deleteDesignation);
module.exports = route;
