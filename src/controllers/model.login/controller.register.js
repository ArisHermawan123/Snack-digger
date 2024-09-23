// Definisikan configurasi Database
const config = require("../../database/models/user");
const bycpt = require("bcrypt");
const response = require("../../utils/responses");
require("dotenv").config();
// Gunakan library mysql

// Fungsi untuk merender file register yang ada pada folder 'src/views/register.ejs'
const formRegister = (req, res) => {
  res.render("auth/register", {
    // Definisikan semua varibel yang ingin ikut dirender kedalam register.ejs
    url: `${process.env.BASE_URL}\n/`,
  });
};
// Fungsi untuk menyimpan data
const saveRegister = async (req, res) => {
  const salt = await bycpt.genSalt(10);
  const UserRegist = { username: req.body.username, email: req.body.email, password: await bycpt.hash(req.body.password, salt) };
  if (UserRegist) {
    const CreateUSer = await config.create(UserRegist, function (error, results) {
      if (error) console.log("error");
      response(res, 201, { CreateUSer: CreateUSer });
      return res.redirect("/login");
    });
  } else {
    res.redirect("/login");
    res.end();
  }
};

module.exports = { saveRegister, formRegister };
