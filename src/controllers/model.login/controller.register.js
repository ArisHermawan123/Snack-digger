const config = require("../../database/models/user");
const bycpt = require("bcrypt");
require("dotenv").config();

const formRegister = (req, res) => {
  res.render("auth/register", {
    url: `${process.env.BASE_URL}\n/`,
  });
};

const saveRegister = async (req, res) => {
  const salt = await bycpt.genSalt(10);
  const UserRegist = { username: req.body.username, email: req.body.email, password: await bycpt.hash(req.body.password, salt) };
  const CreateUSer = await config.create(UserRegist);

  if (CreateUSer) {
    req.flash("status", "Yes..");
    req.flash("message", "Registrasi berhasil");
    res.redirect("/login");
    console.log("berhasil");
  } else {
    console.log("Error");
    res.redirect("/login");
    res.end();
  }
};

module.exports = { saveRegister, formRegister };
