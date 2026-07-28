const mongoose = require("mongoose");

const foundItemSchema = new mongoose.Schema({
    itemName: String,
    imagePath: String,
    foundLocation: String,
    dateFound: String,
    details: String,
    status: String
});

module.exports = mongoose.model("FoundItem", foundItemSchema);
