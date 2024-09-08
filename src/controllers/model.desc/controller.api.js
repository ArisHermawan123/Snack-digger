const modelPorducts = require("../../database/models/desc");
const response = require("../../utils/responses");

const GetDataFromApi = async (req, res) => {
  try {
    const dataProduct = await modelPorducts.findAndCountAll();
    return response(res, 201, { data: dataProduct.rows });
  } catch (error) {
    return response(res, 404, { message: error.message, stack: error.stack });
  }
};

const UploadDataToApi = async (req, res) => {
  const { name: name, description: description, price: price } = req.body;
  try {
    const data = await modelPorducts.create({ name, description, price });
    return response(res, 201, { product: data });
  } catch (error) {
    console.log(error.message);
    return response(res, 500, { message: error.message, stack: error.stack });
  }
};

const DeleteDataFromAPi = async (req, res) => {
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

module.exports = { GetDataFromApi, UploadDataToApi, DeleteDataFromAPi };
