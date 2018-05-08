/**
 * Module dependencies.
 */
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var schedule = require("node-schedule");

/**
 * Load environment variables from .env.example file, where API keys and passwords are configured.
 */
dotenv.config();

/**
 * Services
 */
var sampleService = require("./src/services/sample");

/**
 * Connect to MongoDB.
 */
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, { useMongoClient: true });
mongoose.connection.on("error", () => {
    console.log("MongoDB connection error. Please make sure MongoDB is running.");
    process.exit();
});

const sampleDaemon = schedule.scheduleJob("*/" + process.env.SCHEDULE_INTERVAL + " * * * * *", sampleService);

console.log("---------- Started Sample Daemon ----------");
