const mongoose = require("mongoose");

const url = process.env.DB;

module.exports.connect = () => {
  mongoose
    .connect(url, {})
    .then(() => console.log("MongoDB Database is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
