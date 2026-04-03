const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("your_mongodb_connection_string");
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ DB Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
