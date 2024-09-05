const modelPorducts = require("../database/models/desc");
const response = require("../utils/responses");

const GetDataFromApi = async (req, res) => {
  try {
  } catch (error) {
    return response(res, 404, { message: error.message, stack: error.stack });
  }
};

const UploadDataToApi = async (req, res) => {
  try {
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error.stack });
  }
};

const DeleteDataFromAPi = async (req, res) => {
  try {
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error.stack });
  }
};

module.exports = { GetDataFromApi, UploadDataToApi, DeleteDataFromAPi };
