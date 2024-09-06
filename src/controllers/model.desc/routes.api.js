const express = require("express");
const uploadRoutesApi = express.Router();
const controllerApi = require("../model.desc/controller.api");

uploadRoutesApi.get("/", controllerApi.GetDataFromApi);
uploadRoutesApi.post("/up", controllerApi.UploadDataToApi);
uploadRoutesApi.delete("/delete/:id", controllerApi.DeleteDataFromAPi);

module.exports = uploadRoutesApi;
