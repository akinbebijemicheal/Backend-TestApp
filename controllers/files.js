const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");
const path = require("path");
const fs = require("fs");

const getFiles = catchAsync(async (req, res) => {
  try {
    let lang = 'en'
    if (req.query.lang) {
      if (req.query.lang != "") {
       lang = req.query.lang
      }
    }
    const filePath = path.resolve(__dirname, `../files/${lang}.ftl`); // Path to the FTL file

    // Read the FTL file and send as plain text response
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log(err)
        return res.status(500).send("Error reading FTL file");
      } else {
        // res.set('Content-Type', 'text/plain');
        return res.send(data); // Send the raw FTL file content
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error reading FTL file");
  }
});

module.exports = {
  getFiles,
};
