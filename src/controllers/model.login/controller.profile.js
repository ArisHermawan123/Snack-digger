const config = require("../../database/models/user");
const response = require("../../utils/responses");
require("dotenv").config();

const profile = async (req, res) => {
  let id = req.session.id;
  const GetId = await config.create({
    where: id,
    function(error, results) {
      if (error) throw error;
      res.render("partials/profile", {
        url: `${process.env.BASE_URL}\n/`,
        userName: req.session.username,
        nama: results[0]["username"],
        email: results[0]["email"],
      });
    },
  });
  response(res, 201, { GetId: GetId });
};

module.exports = { profile };
