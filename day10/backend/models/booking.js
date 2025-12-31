const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  dob: String,
  time: String,
  place: String,
  phone: String,
  service: Number,
  transactionCode: String
});

module.exports = mongoose.model("Booking", bookingSchema);
