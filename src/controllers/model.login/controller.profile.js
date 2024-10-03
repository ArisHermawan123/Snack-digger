const config = require("../../database/models/user");
// const response = require("../../utils/responses");
require("dotenv").config();

const profile = async (req, res) => {
  const id = req.session.id;
  try {
    const user = await config.findOne({ where: { id: id } }, (error, results) => {
      if (error) throw error;
      if (user) {
        res.render("partials/profile", {
          url: `${process.env.BASE_URL}\n/`,
          userName: req.session.username,
          nama: results[0]["username"],
          email: results[0]["email"],
        });
        return user;
      } else {
        return res.status(400).send("User Notfound");
      }
    });
  } catch (error) {
    console.log("Error Fetching User: ", error);
    return res.status(500).send("Server Error");
  }
  // const GetID = await config.findOne({ where: { id: id } });
  // const parsedValue = parseInt(GetID, 10);
  // if (parsedValue) {
  //   if (parsedValue === null) {
  //     return res.status(400).send("Invalid Interget value");
  //   }
  //   if (error) console.log(error.message);
  //   res.render("partials/profile", {
  //     url: `${process.env.BASE_URL}\n/`,
  //     userName: req.session.username,
  //     nama: results[0]["username"],
  //     email: results[0]["email"],
  //   });
  // }
  // return GetID;
};

module.exports = { profile };
