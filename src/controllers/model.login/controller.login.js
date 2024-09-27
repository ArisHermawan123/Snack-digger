const config = require("../../database/models/user");
const bycpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const response = require("../../utils/responses");
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
  const user = await config.findOne({ where: { email: req.body.email } });
  if (user) {
    const ValidPass = await bycpt.compare(req.body.password, user.password);
    const TokenJwt = jwt.sign({ id: user.id, email: user.email, username: user.username }, process.env.JSONTOKEN, function (err, result) {
      if (err) console.log(err.message);
      if (ValidPass) {
        if (result.length > 0) {
          req.session.loggedin = true;
          res.session.id = result[0].id;
          res.session.username = result[0].username;
          res.redirect("/");
        } else {
          req.flash("color", "danger");
          req.flash("status", "Oops..");
          req.flash("message", "Akun tidak ditemukan");
          res.redirect("/login");
          console.log("Erorr");
        }
      } else {
        res.redirect("/login");
        console.log("error 2");
      }
    });
    response(res, 201, { TokenJwt: TokenJwt });
  } else {
    console.log("error mas");
    res.redirect("/login");
    res.end();
  }
};

// Fungsi untuk logout | Cara memanggilnya menggunakan url/rute 'http://localhost:5050/login/logout'
const logout = (req, res) => {
  // Hapus sesi user dari broser
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    // Hapus cokie yang masih tertinggal
    res.clearCookie("secretname");
    res.redirect("/login");
  });
};

module.exports = { login, loginAuth, logout };
