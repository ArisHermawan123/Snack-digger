const model = require("../database/models/images");

const UploadDataImage = async ({ image_url }) => {
  try {
    const data = await model.create({ image_url: image_url });
    return data;
  } catch (error) {
    throw error;
  }
};

const GetDataImage = async ({ DataResult }) => {
  try {
    const dataImage = await model.findAndCountAll({ data: DataResult });
    return dataImage;
  } catch (error) {
    console.log({ message: "Data Tidak ditemukan" });
  }
};

const DeleteDataImage = async ({ product }) => {
  try {
    const dataDelete = await model.destroy({ delete: product });
    return dataDelete;
  } catch (error) {
    console.log({ message: "Delete data gagal" });
  }
};

module.exports = { UploadDataImage, GetDataImage, DeleteDataImage };
