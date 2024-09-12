// Definisikan configurasi Database
const config = require("../../database/models/user");
require("dotenv").config();
// Gunakan library mysql
let pg = require("pg").Pool;
let pool = new pg({ config });

pool.on("error", (err) => {
  console.error(err);
});

// Fungsi untuk merender file register yang ada pada folder 'src/views/register.ejs'
const formRegister = (req, res) => {
  res.render("auth/register", {
    // Definisikan semua varibel yang ingin ikut dirender kedalam register.ejs
    url: `${process.env.BASE_URL}\n/`,
  });
};
// Fungsi untuk menyimpan data
const saveRegister = (req, res) => {
  // Tampung inputan user kedalam varibel username, email dan password
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  // Pastikan semua varibel terisi
  if (username && email && password) {
    // Panggil koneksi dan eksekusi query
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(`INSERT INTO user (username,email,password) VALUES (?,?,SHA2(?,512));`, [username, email, password], function (error, results) {
        if (error) throw error;
        // Jika tidak ada error, set library flash untuk menampilkan pesan sukses
        req.flash("color", "success");
        req.flash("status", "Yes..");
        req.flash("message", "Registrasi berhasil");
        // Kembali kehalaman login
        res.redirect("/login");
      });
      // Koneksi selesai
      connection.release();
    });
  } else {
    // Kondisi apabila variabel username, email dan password tidak terisi
    res.redirect("/login");
    res.end();
  }
};

module.exports = { saveRegister, formRegister };
