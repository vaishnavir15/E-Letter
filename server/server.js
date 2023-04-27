const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

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

app.get("/api/images", (req, res) => {
  fs.readdir("uploads/", (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading uploads directory");
    }
    const imageFiles = files.filter(file => /\.(jpe?g|png|gif)$/i.test(file));
    res.send(imageFiles);
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

  



