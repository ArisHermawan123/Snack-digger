const config = require("../../database/models/user");
require("dotenv").config();

const HandleErrorProfile = (err) => {
  console.log(err.message, err.code);
};

const profile = (req, res) => {
  const GetID = config.findOne({ where: { id: req.session.id } });
  if (GetID) {
    (error, results) => {
      if (error) throw error;
      res.render("partials/profile", {
        url: `${process.env.BASE_URL}\n/`,
        userName: req.session.username,
        name: results[0]["username"],
        email: results[0]["email"],
      });
    };
  } else {
    HandleErrorProfile(err);
  }
};
module.exports = { profile };
