const config = require("../../database/models/user");
require("dotenv").config();

let pg = require("pg").Pool;
let pool = new pg({ config });

pool.on("error", (err) => {
  console.error(err);
});

const profile = (req, res) => {
  let id = req.session.userid;
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query(
      `
                SELECT * FROM user where id = '${id}';
                `,
      function (error, results) {
        if (error) throw error;
        res.render("partials/profile", {
          url: `${process.env.BASE_URL}\n/`,
          userName: req.session.username,
          nama: results[0]["username"],
          email: results[0]["email"],
        });
      }
    );
    connection.release();
  });
};

module.exports = { profile };
