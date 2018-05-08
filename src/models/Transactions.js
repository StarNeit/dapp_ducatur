var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    txNum: { type: String, required: true },
});

module.exports = mongoose.model("Transactions", schema);