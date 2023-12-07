const multer = require("multer");
const path = require('path');

const dir = path.join(__dirname + '../../../mysite/public/uploads')

const fileStorageEngine = multer.diskStorage({
  destination: ( req, file, cb) => {
    cb(null, dir);
  },

  filename: (req, file, cb) => {
    cb(null,Date.now() + '--' + file.originalname);
  },

})

const upload = multer({storage : fileStorageEngine});

module.exports = { upload };