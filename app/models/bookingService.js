/* SCHEME FOR COURSES */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booking = new Schema({
    name: String,
    number: String,
    date: String,
    time: String,
    email: String,
    table: String

});

module.exports = mongoose.model("Bookings", booking);