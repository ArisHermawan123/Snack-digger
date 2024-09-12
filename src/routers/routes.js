const express = require("express");
const router = express.Router();

const uploadRoutesImage = require("../modules/upload.routes");
const uploadRoutesApi = require("../controllers/model.desc/routes.api");

router.use("/image", uploadRoutesImage);
router.use("/data", uploadRoutesApi);

module.exports = router;
