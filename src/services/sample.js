var Sample = require("../models/Sample");

function sample() {
    console.log("\n----- Running sample task -----");

    var obj = new Sample();
    obj.username = "hello!";
    obj.save();
};

module.exports = sample;