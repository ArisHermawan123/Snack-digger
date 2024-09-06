const modelLogin = require("../../database/models/user");
const response = require("../../utils/responses");
const bycrpt = require("bcrypt");

const GetDataUser = async (req, res) => {};

const InputDataUser = async (req, res) => {
  const userLog = await modelLogin.findAll({ email: req.body.email });
  userLog
    .then((users) => {
      if (users.length > 0) {
        let user = users[0];
        let passwordHash = user.password;

        if (bycrpt.compareSync(req.body.password, passwordHash)) {
          req.session.email = req.body.email;
          res.redirect("/");
        }
      }
    })
    .catch((err) => {
      response(res, 500, { message: err.message, stack: err.stack });
    });
};

const DeleteDataUser = async (req, res) => {};
module.exports = { GetDataUser, InputDataUser, DeleteDataUser };
