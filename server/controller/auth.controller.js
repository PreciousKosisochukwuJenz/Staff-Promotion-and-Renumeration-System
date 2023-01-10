const passport = require("passport");

// Login Process
exports.postLogin = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    // failureFlash: true,
  })(req, res, next);
};

exports.logout = async (req, res, next) => {
  req.logOut();
  // request.flash("success", "You are logged out");
  res.redirect("/auth/login");
};
