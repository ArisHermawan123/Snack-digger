const express = require("express");
const router = express.Router();

const uploadRoutesImage = require("../modules/upload.routes");
const uploadRoutesApi = require("../controllers/model.desc/routes.api");
const uploadRotesRegist = require("../controllers/routes.login/register.routes");
const uploadRotesApp = require("../controllers/routes.login/app.routes");
const uploadRotesLogin = require("../controllers/routes.login/login.routes");

router.use("/image", uploadRoutesImage);
router.use("/data", uploadRoutesApi);
router.use("/", uploadRotesApp);
router.use("/", uploadRotesRegist);
router.use("/", uploadRotesLogin);

module.exports = router;
