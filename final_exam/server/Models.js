const mongoose = require("mongoose");
const {ReactOperationScheme, ReactProductsScheme } = require("./Schemas");

const ReactOperationModel = mongoose.model("ReactOperation", ReactOperationScheme);
const ReactProductsModel = mongoose.model("ReactProducts", ReactProductsScheme);

module.exports = {
    ReactOperationModel,
    ReactProductsModel
};