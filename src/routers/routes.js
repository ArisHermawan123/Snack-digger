const express = require("express");
const router = express.Router();

const uploadRoutesImage = require("../modules/upload.routes");
const uploadRoutesApi = require("../controllers/model.desc/routes.api");
const uploadRoutesApp = require("../controllers/routes.login/app.routes");
const uploadRoutesLogin = require("../controllers/routes.login/login.routes");
const uploadRoutesRegist = require("../controllers/routes.login/register.routes");

router.use("/image", uploadRoutesImage);
router.use("/data", uploadRoutesApi);
router.use("/", uploadRoutesApp);
router.use("/", uploadRoutesLogin);
router.use("/", uploadRoutesRegist);

module.exports = router;
