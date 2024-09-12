const config = require("../../database/models/user");
require("dotenv").config();

let pg = require("pg").Pool;
let pool = new pg({ config });

pool.on("error", (err) => {
  console.error(err);
});

// Render tampilan untuk login yang ada didalam folder 'src/views/login.ejs'
const login = (req, res) => {
  res.render("auth/login", {
    url: `${process.env.BASE_URL}\n/`,
    // Kirim juga library flash yang telah di set
  });
};
// Post / kirim data yang diinput user
const loginAuth = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (email && password) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(`SELECT * FROM user WHERE email = ? AND password = SHA2(?,512)`, [email, password], function (error, results) {
        if (error) throw error;
        if (results.length > 0) {
          // Jika data ditemukan, set sesi user tersebut menjadi true
          req.session.loggedin = true;
          req.session.id = results[0].id;
          req.session.username = results[0].username;
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
    });
  } else {
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
