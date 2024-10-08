const express = require("express");
const cors = require("cors");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const response = require("./src/utils/responses");

const app = express();
const flash = require("req-flash");
const db = require("./src/database/config/db.config");
const router = require("./src/routers/routes");

require("dotenv").config();
require("./src/routers/index.routes")(app);
require("./src/routers/home.routes")(app);

app.engine("ejs", ejsMate);
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "t@1k0ch3ng",
    name: "secretName",
    cookie: {
      sameSite: true,
      maxAge: 60000,
    },
  })
);

app.use(cors());

app.use(flash());

app.use(function (req, res, next) {
  res.setHeader("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
  res.setHeader("Pragma", "no-cache");
  next();
});

app.use(router);

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
