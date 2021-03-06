const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename(request, file, callback) {
      const fileName = `${Date.now()}_${file.originalname.replace(' ','')}`;
      callback(null, fileName);
    },
  }),
};