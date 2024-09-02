const express = require("express");
const App = require("./src/routers/index.routes");
// const client = require("ejs");
require("dotenv").config();

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.json());
app.use("/public", express.static("public"));

require("./src/routers/index.routes")(app);
require("./src/routers/home.routes")(app);
app.listen(process.env.PORT, () => {
  console.log(`Server run in base url >>> ${process.env.BASE_URL}\n`);
});
