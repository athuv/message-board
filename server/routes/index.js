import express from "express";

var indexRouter = express.Router();
/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  // res.render("index", { title: "Express" });
  console.log("asd");
});

export default indexRouter;
