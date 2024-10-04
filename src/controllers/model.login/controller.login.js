const config = require("../../database/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const response = require("../../utils/responses");
require("dotenv").config();

const login = (req, res) => {
  res.render("auth/login", {
    url: `${process.env.BASE_URL}\n/`,
    colorFlash: req.flash("color"),
    statusFlash: req.flash("status"),
    pesanFlash: req.flash("message"),
  });
};

const loginAuth = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await config.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      req.flash("color", "danger");
      req.flash("status", "Oppss... ");
      req.flash("message", "Email nya benerin dulu bg");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid Password");
      res.redirect("/login");
    }

    const token = jwt.sign({ userId: user.id, email: user.email, username: user.username }, process.env.JSONTOKEN, { expiresIn: "1h" }, (error, results) => {
      if (error) console.log(error.message);
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.id = results[0].id;
        req.session.username = results[0].username;
        res.redirect("/home");
      } else {
        req.flash("color", "danger");
        req.flash("status", "Oops..");
        req.flash("message", "Akun tidak ditemukan");
      }
    });
    const AuthRess = token;
    return AuthRess;
  } catch (error) {
    console.error("Error logging in:", error);
    res.redirect("/login");
    res.end();
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    res.clearCookie("secretname");
    res.redirect("/login");
  });
};

module.exports = { login, loginAuth, logout };
