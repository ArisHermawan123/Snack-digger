const service = require("./upload.service");
const uploadFile = require("../middlewares/upload/cloudinary");
const response = require("../utils/responses");

const UploadImage = async (req, res) => {
  try {
    const { file } = req;
    if (!file) return response(res, 400, { message: "No image uploaded" });

    const upload = await uploadFile(file.path, "your folder path you have created on cloudinary.");
    const { secure_url: image_url } = upload;
    const result = await service.UploadImage({ image_url });

    return response(res, 201, result);
  } catch (error) {
    console.log(error.message);
    return response(res, 500, error.message);
  }
};

const GetImageData = async (req, res) => {
  try {
  } catch (error) {
    console.log({ message: error });
  }
};
module.exports = { UploadImage, GetImageData };
