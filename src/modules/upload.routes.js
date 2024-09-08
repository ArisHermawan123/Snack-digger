const express = require("express");
const uploadRoutesImage = express.Router();
const upload = require("../middlewares/upload/multer.middleware");
const controller = require("./upload.controller");

uploadRoutesImage.post("", upload.single("image"), controller.UploadDataImage);
uploadRoutesImage.get("", controller.GetDataImage);
uploadRoutesImage.delete("/delete/:id", controller.DeleteDataImage);

module.exports = uploadRoutesImage;
