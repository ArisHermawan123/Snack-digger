const express = require("express");
const router = express.Router();

const uploadRoutesImage = require("../modules/upload.routes");
const uploadRoutesApi = require("../controllers/model.desc/routes.api");

const uploadRoutesApp = require("../routers/routes.login/app.routes");
const uploadRoutesLogin = require("../routers/routes.login/login.routes");
const uploadRoutesRegist = require("../routers/routes.login/register.routes");

const uploadRoutesProduct = require("../routers/routes.product/product.routes");

router.use("/image", uploadRoutesImage);
router.use("/data", uploadRoutesApi);

router.use("/", uploadRoutesApp);
router.use("/login", uploadRoutesLogin);
router.use("/register", uploadRoutesRegist);

router.use("/", uploadRoutesProduct);

module.exports = router;
