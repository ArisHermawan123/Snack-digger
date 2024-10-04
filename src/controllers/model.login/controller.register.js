const config = require("../../database/models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();

const formRegister = (req, res) => {
  res.render("auth/register", {
    url: `${process.env.BASE_URL}\n/`,
  });
};

const saveRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Cek apakah username atau email sudah ada
    const existingUser = await config.findOne({
      where: {
        username: username,
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).send({ message: "Username or email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await config.create({ username, email, password: hashedPassword });

    if (user) {
      req.flash("color", "success");
      req.flash("status", "yess..");
      req.flash("message", "Registrasi Berhasil");
      res.redirect("/login");
      console.log("Registrasi Berhasil");
    } else {
      res.redirect("/login");
      res.end();
      console.log("Registrasi Error");
    }
    res.status(201).json({ message: "User registered successfully", userId: user.id });
    return;
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

module.exports = { saveRegister, formRegister };
