const modelLogin = require("../../database/models/user");
const response = require("../../utils/responses");

const GetDataUser = async (req, res) => {};

const InputDataUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const dataInputUser = await modelLogin.create({ email, password });
    return response(res, 201, { dataLogin: dataInputUser });
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error.stack });
  }
};

const DeleteDataUser = async (req, res) => {};
module.exports = { GetDataUser, InputDataUser, DeleteDataUser };
