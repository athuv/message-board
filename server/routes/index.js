import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

var indexRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "./messages.json");

indexRouter.get("/", function (req, res, next) {
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
});

indexRouter.post("/", function (req, res, next) {
  const formData = req.body;

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
    } else {
      const existingData = JSON.parse(data);
      const updatedData = [...existingData, formData];
      const jsonData = JSON.stringify(updatedData, null, 2);

      fs.writeFile(filePath, jsonData, "utf8", function (err) {
        if (err) {
          console.error(err);
          res.status(500).send("Error adding data");
        } else {
          res.send("Message sent successfully");
        }
      });
    }
  });
});

indexRouter.delete("/", function (req, res, next) {
  const jsonData = JSON.stringify([], null, 2);
  fs.writeFile(filePath, jsonData, "utf8", function (err) {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting data");
    } else {
      res.send("Data deleted successfully");
    }
  });
});

export default indexRouter;
