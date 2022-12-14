const express = require("express");
const cors = require("cors");
// const path = require("path");
const app = express();
const QuizRouter = require("./Router/index");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

const dbConnect = require("./dbConnect");
dbConnect.connect();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/quiz", QuizRouter);
//   app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
//   app.use(express.static(path.join(__dirname, "/../frontend/build")));

//   app.get("*", (req, res) => {
//     try {
//       res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
//     } catch (e) {
//       res.send("Welcome to stackoverflow clone");
//     }
//   });

app.listen(PORT, () => {
  console.log(`Quiz api is running on PORT No- ${PORT}`);
});
