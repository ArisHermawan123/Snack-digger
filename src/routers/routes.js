const express = require("express");
const router = express.Router();

const uploadRoutesImage = require("../modules/upload.routes");
const uploadRoutesApi = require("../controllers/model.desc/routes.api");
const uploadRotesRegist = require("../controllers/routes.login/register.routes");
const uploadRotesApp = require("../controllers/routes.login/app.routes");
const uploadRotesLogin = require("../controllers/routes.login/login.routes");

router.use("/image", uploadRoutesImage);
router.use("/data", uploadRoutesApi);
router.use("/home", uploadRotesApp);
router.use("/register", uploadRotesRegist);
router.use("/login", uploadRotesLogin);

module.exports = router;
