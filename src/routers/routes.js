const express = require("express");
const uploadRoutes = require("../modules/upload.routes");
const uploadRoutesApi = require("../controllers/model.desc/routes.api");
const router = express.Router();

router.use("/upload", uploadRoutes);
router.use("/data", uploadRoutesApi);

module.exports = router;
