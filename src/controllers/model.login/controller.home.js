require("dotenv").config();
const home = (req, res) => {
  res.render("home/home", {
    url: `${process.env.BASE_URL}\n/`,
    userName: req.session.username,
  });
};
const index = (req, res) => {
  res.render("home/index", {
    url: `${process.env.BASE_URL}\n/`,
  });
};

module.exports = { home, index };
