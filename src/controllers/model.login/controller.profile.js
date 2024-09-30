const config = require("../../database/models/user");
require("dotenv").config();

const profile = async (req, res) => {
  let id = req.session.id;
  const GetID = await config.findOne({ where: { id } }, (error, results) => {
    if (error) throw error;
    if (results) {
      res.render("partials/profile", {
        url: `${process.env.BASE_URL}\n/`,
        userName: req.session.username,
        name: results[0]["username"],
        email: results[0]["email"],
      });
    }
  });
  return GetID;
};

module.exports = { profile };
