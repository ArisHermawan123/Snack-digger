const router = require("express").Router();

module.exports = (app) => {
  router.get("/product", (req, res) => {
    async function getCoins() {
      const api_url = "http://localhost:3200/upload/data";
      const fetch_response = await fetch(api_url);
      const data = fetch_response.json();
      return console.log(data);
    }
    getCoins();
    res.render("partials/product");
  });
  router.get("/product/upload-sell", (req, res) => {
    res.render("partials/upload-sell");
  });
  app.use("/", router);
};
