const config = require("../../database/models/user");

let pg = require("pg");
let pool = new pg.Pool(config);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  profile(req, res) {
    let id = req.session.userid;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM table_user where user_id = '${id}';
                `,
        function (error, results) {
          if (error) throw error;
          res.render("profile", {
            url: `${process.env.BASE_URL}\n/`,
            userName: req.session.username,
            nama: results[0]["user_name"],
            email: results[0]["user_email"],
          });
        }
      );
      connection.release();
    });
  },
};
