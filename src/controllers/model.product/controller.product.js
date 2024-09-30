const IsProduct = require("../../database/models/desc");
require("dotenv").config();

const product = (res, req) => {
  res.render("partials/product", {
    url: `${process.env.BASE_URL}\n/`,
  });
  //   res.render("partials/upload-sell", {
  //     url: `${process.env.BASE_URL}\n/`,
  //   });
};

module.exports = { product };
