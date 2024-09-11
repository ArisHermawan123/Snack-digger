const express = require("express");
const uploadRoutesApi = express.Router();
const controllerApi = require("../model.desc/controller.api");

uploadRoutesApi.get("/", controllerApi.GetDataDescs);
uploadRoutesApi.post("/up", controllerApi.UploadDataDescs);
uploadRoutesApi.delete("/delete/:id", controllerApi.DeleteDataDescs);
uploadRoutesApi.patch("/", controllerApi.UpdateDataDescs);

module.exports = uploadRoutesApi;
