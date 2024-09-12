require("dotenv").config();
module.exports = {
  home(req, res) {
    res.render("home/home", {
      url: `${process.env.BASE_URL}\n`,
      userName: req.session.username,
    });
  },
};
