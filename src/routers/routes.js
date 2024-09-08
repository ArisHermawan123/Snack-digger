const express = require("express");
const uploadRoutesImage = require("../modules/upload.routes");
const uploadRoutesApi = require("../controllers/model.desc/routes.api");
const accountRoutes = require("../controllers/model.login/login.routes");
const router = express.Router();

router.use("/image", uploadRoutesImage);
router.use("/data", uploadRoutesApi);
router.use("/", accountRoutes);

module.exports = router;
