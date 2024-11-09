const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");
const path = require("path");
const fs = require("fs");

const getFiles = catchAsync(async (req, res) => {
  try {
    let lang = "de";
    if (req.params.lang) {
      if (req.params.lang != "") {
        lang = req.params.lang;
      }
    }

    const filePath = path.resolve(process.cwd(), `./files/${lang}.ftl`); // Path to the FTL file
    console.log(filePath);
    // Read the FTL file and send as plain text response
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send(`${err} Error reading FTL file`);
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
