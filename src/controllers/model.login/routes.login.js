const express = require("express");
const uploadRoutesLogin = express.Router();
const controllerLogin = require("../model.login/controller.login");

uploadRoutesLogin.get("/login", controllerLogin.GetDataUser);
uploadRoutesLogin.post("/login", controllerLogin.InputDataUser);
uploadRoutesLogin.delete("/", controllerLogin.DeleteDataUser);

module.exports = uploadRoutesLogin;
