const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const userschema = require("./models/user.model.js")
// const Uploadschema = require("./models/upload.model.js")

const port = process.env.PORT || 8080;
let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
});


process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});