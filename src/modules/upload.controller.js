const service = require("./upload.service");
const uploadFile = require("../middlewares/upload/cloudinary");
const response = require("../utils/responses");
const Product = require("../database/models/images");

const UploadDataImage = async (req, res, err) => {
  try {
    const { file } = req;
    if (!file) return response(res, 400, { message: err.message, stack: err?.stack });

    const upload = await uploadFile(file.path, "your folder path you have created on cloudinary.");
    const { secure_url: image_url } = upload;

    const result = await service.UploadDataImage({ image_url });

    return response(res, 201, result);
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error?.stack });
  }
};

const GetDataImage = async (req, res) => {
  try {
    const DataResult = await Product.findAndCountAll();
    return response(res, 201, { data: DataResult.rows });
  } catch (error) {
    return response(res, 404, { message: error.message, stack: error?.stack });
  }
};

const DeleteDataImage = async (req, res) => {
  try {
    const DeleteData = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    const removeImage = await DeleteData.destroy({
      where: {
        id: req.params.id,
      },
    });

    return response(res, 200, { remove: removeImage });
  } catch (error) {
    return response(res, 500, { message: error.message, stack: error?.stack });
  }
};

module.exports = { UploadDataImage, GetDataImage, DeleteDataImage };
