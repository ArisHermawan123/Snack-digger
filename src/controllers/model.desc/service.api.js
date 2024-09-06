const modelServicesProduct = require("../../database/models/desc");

const GetDataFromApi = async ({ dataProduct }) => {
  try {
    const dataProducts = await modelServicesProduct.findAndCountAll({ data: dataProduct });
    return dataProducts;
  } catch (error) {
    console.log(error.message);
  }
};
const UploadDataToApi = async ({ DescData }) => {
  try {
    const DataDesc = await modelServicesProduct.create(DescData);
    return DataDesc;
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteDataFromAPi = async ({ removeData }) => {
  try {
    const dataDelete = await model.destroy({ delete: removeData });
    return dataDelete;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { GetDataFromApi, UploadDataToApi, DeleteDataFromAPi };
