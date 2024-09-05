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
    res.render("product");
  });
  app.use("/", router);
};
