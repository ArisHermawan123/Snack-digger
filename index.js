const express = require("express");
const cors = require("cors");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("req-flash");

const app = express();

const response = require("./src/utils/responses");
const db = require("./src/database/config/db.config");
const router = require("./src/routers/routes");

require("dotenv").config();
require("./src/routers/index.routes")(app);
require("./src/routers/home.routes")(app);
require("./src/routers/product.routes")(app);

app.engine("ejs", ejsMate);
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));
app.use("/public", express.static("public"));
app.use(router);
app.use(cors());
app.use(flash());

// Configurasi library session
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
