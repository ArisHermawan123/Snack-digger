const login = require("../model.login/controller.login");
const register = require("../model.login/controllers.regist");
const home = require("../model.login/controller.home");
const profile = require("../model.login/controller.porfile");

module.exports = {
  login,
  register,
  home,
  profile,
};
