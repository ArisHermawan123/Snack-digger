const router = require("express").Router();

module.exports = (app) => {
  router.get("/", (req, res) => {
    async function getCoins() {
      const api_url = "http://localhost:3200/upload/data";
      let fetch_response = await fetch(api_url);
      let json = await fetch_response.json();
      console.table(json);
    }
    getCoins();
    res.render("index");
  });
  app.use("/", router);
};
