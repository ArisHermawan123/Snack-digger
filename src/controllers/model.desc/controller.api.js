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
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };

  if (!req.body.name && !req.body.description && !req.body.price) {
    return response(res, 404, { message: "Name can not be emty" });
  }

  try {
    const DescData = await modelPorducts.create(product);
    return response(res, 201, { product: DescData });
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error.stack });
  }
};

const DeleteDataFromAPi = async (req, res) => {
  try {
    const DeleteData = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    const removeData = await DeleteData.destroy({
      where: {
        id: req.params.id,
      },
    });

    return response(res, 200, { remove: removeData });
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error.stack });
  }
};

module.exports = { GetDataFromApi, UploadDataToApi, DeleteDataFromAPi };
