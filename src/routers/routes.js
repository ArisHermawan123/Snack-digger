const express = require("express");
const uploadRoutesImage = require("../modules/upload.routes");
const uploadRoutesApi = require("../controllers/model.desc/routes.api");
const uploadRotesRegist = require("../../src/controllers/model.login/register.routes");
const uploadRotesApp = require("../../src/controllers/model.login/app.routes");
const uploadRotesLogin = require("../../src/controllers/model.login/login.routes");
const router = express.Router();

router.use("/image", uploadRoutesImage);
router.use("/data", uploadRoutesApi);
router.use("/", uploadRotesApp);
router.use("/", uploadRotesRegist);
router.use("/", uploadRotesLogin);

module.exports = router;
