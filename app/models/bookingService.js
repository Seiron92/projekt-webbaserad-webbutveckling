/* SCHEME FOR COURSES */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booking = new Schema({
    name: String,
    number: Number,
    date: Date,
    time: String,
    email: String,
    table: String

});

module.exports = mongoose.model("Bookings", booking);