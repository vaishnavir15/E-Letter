const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload-image", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

  



