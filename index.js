const express = require("express");
const co = require("cors");

const app = express();

const response = require("./src/utils/responses");
const db = require("./src/database/config/db.config");
const router = require("./src/routers/routes");

require("dotenv").config();
require("./src/routers/index.routes")(app);
require("./src/routers/home.routes")(app);

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(router);
app.use(co());

app.all("*", (req, res, next) => {
  response(res, 404, "Page Not Found");
});

db.authenticate()
  .then(() => {
    app.listen(3200, () => {
      console.log("DB connected");
      console.log(`Server is running on ${process.env.BASE_URL}\n`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
