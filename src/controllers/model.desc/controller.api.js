const modelPorducts = require("../../database/models/desc");
const response = require("../../utils/responses");

const GetDataDescs = async (req, res) => {
  try {
    const dataProduct = await modelPorducts.findAndCountAll();
    return response(res, 201, { data: dataProduct.rows });
  } catch (error) {
    return response(res, 404, { message: error.message, stack: error.stack });
  }
};

const UploadDataDescs = async (req, res) => {
  const { name: name, description: description, price: price } = req.body;
  try {
    const dataDescs = await modelPorducts.create({ name, description, price });
    return response(res, 201, { product: dataDescs, status: "Up Data Berhasil" });
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error.stack });
  }
};

const DeleteDataDescs = async (req, res) => {
  try {
    const DeleteData = await modelPorducts.findOne({
      where: {
        id: req.params.id,
      },
    });

    const removeData = await DeleteData.destroy({
      where: {
        id: req.params.id,
      },
    });

    return response(res, 200, { remove: removeData, status: "Berhasil Remove" });
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error.stack });
  }
};

const UpdateDataDescs = async (req, res) => {
  try {
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error.stack });
  }
};

module.exports = { GetDataDescs, UploadDataDescs, DeleteDataDescs, UpdateDataDescs };
