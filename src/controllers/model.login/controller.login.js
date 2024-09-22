const config = require("../../database/models/user");
const bycpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const response = require("../../utils/responses");
require("dotenv").config();

// Render tampilan untuk login yang ada didalam folder 'src/views/login.ejs'
const login = (req, res) => {
  res.render("auth/login", {
    url: `${process.env.BASE_URL}\n/`,
    // Kirim juga library flash yang telah di set
  });
};
// Post / kirim data yang diinput user
const loginAuth = async (req, res, err) => {
  const user = await config.findOne({ where: { email: req.body.email } });
  if (user) {
    if (err) throw err;
    const ValidPass = await bycpt.compare(req.body.password, user.password);
    if (ValidPass.length > 0) {
      const TokenJwt = jwt.sign({ id: user.id, email: user.email }, process.env.JSONTOKEN);
      response(res, 201, { TokenJwt: TokenJwt });
      req.session.loggedin = true;
      res.redirect("/home");
    } else {
      response(res, 400, console.log({ message: "Gagal login" }));
      req.flash("color", "danger");
      req.flash("status", "Oops..");
      req.flash("message", "Akun tidak ditemukan");
      res.redirect("/login");
    }
  } else {
    response(res, 404, { message: "User does not exist" });
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
