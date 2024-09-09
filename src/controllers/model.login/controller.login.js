const config = require("../../database/models/user");
require("dotenv").config();

let pg = require("pg");
let pool = new pg.Pool({ config });

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  // Render tampilan untuk login yang ada didalam folder 'src/views/login.ejs'
  login(req, res) {
    res.render("auth/login", {
      url: `${process.env.BASE_URL}\n/`,
      // Kirim juga library flash yang telah di set
      colorFlash: req.flash("color"),
      statusFlash: req.flash("status"),
      pesanFlash: req.flash("message"),
    });
  },
  loginAuth(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    if (email && password) {
      pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(`SELECT * FROM table_user WHERE user_email = ? AND user_password = SHA2(?,512)`, [email, password], function (error, results) {
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
      });
    } else {
      res.redirect("/login");
      res.end();
    }
  },
  // Fungsi untuk logout | Cara memanggilnya menggunakan url/rute 'http://localhost:5050/login/logout'
  logout(req, res) {
    // Hapus sesi user dari broser
    req.session.destroy((err) => {
      if (err) {
        return console.log(err);
      }
      // Hapus cokie yang masih tertinggal
      res.clearCookie("secretname");
      res.redirect("/login");
    });
  },
};
