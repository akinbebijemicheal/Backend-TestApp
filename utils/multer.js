const multer = require('multer');
const path = require("path")

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/JPEG" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif" ||
    file.mimetype === "image/svg" ||
    file.mimetype === "image/JPG" ||
    file.mimetype === "image/PNG" ||
    file.mimetype === "image/GIF" ||
    file.mimetype === "image/SVG" ||
    file.mimetype === 'video/gif' ||
    file.mimetype === 'video/mp4' ||
    file.mimetype === 'video/wmv' ||
    file.mimetype === 'video/avi' ||
    file.mimetype === 'video/webm' ||
    file.mimetype === 'video/mkv' 
  ) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

module.exports = multer({
  storage: multer.diskStorage({  
    filename: function(req, file, cb) {
    cb(null, "UniXP" + "-" + file.fieldname + '-' + Date.now() + path.extname(file.originalname));
}}),
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }
});