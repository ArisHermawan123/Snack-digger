const express = require("express");
const cors = require("cors");
const session = require("express-session");
const ejsMate = require("ejs-mate");

const app = express();

const response = require("./src/utils/responses");
const db = require("./src/database/config/db.config");
const router = require("./src/routers/routes");
const AccountRoutes = require("./src/controllers/model.login/controllers");
const HomeRoutes = require("./src/controllers/model.login/controller.login");

require("dotenv").config();
require("./src/routers/index.routes")(app);
require("./src/routers/home.routes")(app);
require("./src/routers/product.routes")(app);

app.engine("ejs", ejsMate);
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(session({ secret: "randomstringsessionscret" }));
app.use("/", AccountRoutes.AccountRoutes);
app.use(router);
app.use(cors());

app.use(function (req, res, next) {
  if (req.session.email == null || req.session.email.length == 0) {
    res.redirect("/login");
  } else {
    next();
  }
});
app.use("/", HomeRoutes.HomeRoutes);

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
