const response = require("../../utils/responses");
const config = require("../../database/models/user");
require("dotenv").config();

let pg = require("pg");
let pool = new pg.Pool(config);

pool.on("error", (err) => {
  console.error(err);
});

const profile = async (req, res) => {
  let id = req.session.User;
  try {
    const poolProf = await pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(` SELECT * FROM table_user where User = '${id}';`, function (error, results) {
        if (error) throw error;
        res.render("profile", {
          url: `${process.env.BASE_URL}\n/`,
          userName: req.session.username,
          nama: results[0]["user_name"],
          email: results[0]["user_email"],
        });
      });
      connection.release();
    });
    return response(res, 201, poolProf);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { profile };
