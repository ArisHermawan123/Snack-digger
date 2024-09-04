const express = require("express");
const uploadRoutes = express.Router();
const upload = require("../middlewares/upload/multer.middleware");
const controller = require("./upload.controller");

uploadRoutes.post("", upload.single("image"), controller.UploadImage);

module.exports = uploadRoutes;
