const express = require("express");
const uploadRoutes = require("../modules/upload.routes");
const uploadRoutesApi = require("../controllers/model.desc/routes.api");
const uploadRoutesLogin = require("../controllers/model.login/routes.login");
const router = express.Router();

router.use("/upload", uploadRoutes);
router.use("/data", uploadRoutesApi);
router.use("/login", uploadRoutesLogin);

module.exports = router;
