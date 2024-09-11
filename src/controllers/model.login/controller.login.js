const config = require("../../database/models/user");
const response = require("../../utils/responses");
require("dotenv").config();

let pg = require("pg");
let pool = new pg.Pool({ config });

pool.on("error", (err) => {
  console.error(err);
});

const login = (req, res) => {
  try {
    res.render("auth/login", {
      url: `${process.env.BASE_URL}\n/`,
      colorFlash: req.flash("color"),
      statusFlash: req.flash("status"),
      pesanFlash: req.flash("message"),
    });
  } catch (error) {
    console.log(error.message);
  }
};

const loginAuth = async (req, res) => {
  const { email: email, password: password } = req.body;
  try {
    if (email && password) {
      const poolLog = await config.create({ email, password });
      if (err) throw err;
      connection.query(`SELECT * FROM User WHERE email = ? AND password = SHA2(?,512)`, [email, password], function (error, results) {
        if (error) throw error;
        if (results.length > 0) {
          // Jika data ditemukan, set sesi user tersebut menjadi true
          req.session.loggedin = true;
          req.session.userid = results[0].user_id;
          req.session.username = results[0].user_name;
          res.redirect("/");
        } else {
          // Jika data tidak ditemukan, set library flash dengan pesan error yang diinginkan
          req.flash("color", "danger");
          req.flash("status", "Oops..");
          req.flash("message", "Akun tidak ditemukan");
          res.redirect("/login");
        }
      });
      connection.release();

      response(res, 201, poolLog);
    } else {
      res.redirect("/login");
      res.end();
    }
  } catch (error) {
    console.log(error.message);
  }
};
// Fungsi untuk logout | Cara memanggilnya menggunakan url/rute 'http://localhost:5050/login/logout'
const logout = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return console.log(err);
      }
      // Hapus cokie yang masih tertinggal
      res.clearCookie("secretname");
      res.redirect("/login");
    });
  } catch (error) {
    console.log(error.message);
  }
  // Hapus sesi user dari broser
};

module.exports = { login, loginAuth, logout };
