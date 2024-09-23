require("dotenv").config();
const home = (req, res) => {
  res.render("home/home", {
    url: `${process.env.BASE_URL}\n/`,
    userName: req.session.username,
  });
};

module.exports = { home };
