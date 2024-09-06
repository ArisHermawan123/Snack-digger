const express = require("express");
const uploadRoutesLogin = express.Router();
const controllerLogin = require("../model.login/controller.login");

uploadRoutesLogin.get("/", controllerLogin.GetDataUser);
uploadRoutesLogin.post("/", controllerLogin.InputDataUser);
uploadRoutesLogin.delete("/", controllerLogin.DeleteDataUser);

module.exports = uploadRoutesLogin;
