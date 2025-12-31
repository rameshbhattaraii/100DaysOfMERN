const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/kundaliDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/", (req, res) => {
  res.send("Server is working");
});
