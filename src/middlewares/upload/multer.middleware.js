const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const deleteImageByMr = async (req, res) => {
  await uploadToRemoteBucket(req.file.path);

  // Delete the file like normal
  await unlinkAsync(req.file.path);

  res.end("UPLOAD COMPLETED!");
};

const fileFilter = (req, file, cb) => {
  const allowedFormats = ["image/jpg", "image/jpeg", "image/png", "image/svg+xml"];

  if (allowedFormats.includes(file.mimetype)) {
    cb(null, true);
  } else {
    const res = {
      status: 400,
      description: "Bad Request",
      result: "Only JPEG and PNG are allowed.",
    };

    cb(JSON.stringify(res, null, 2), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = { deleteImageByMr };
module.exports = upload;
