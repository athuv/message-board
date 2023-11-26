import express from "express";

var indexRouter = express.Router();
/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  const message = [
    { name: "Kevin", message: "Hello World!!" },
    { name: "John", message: "How are you?" },
    { name: "Calvin", message: "Good" },
  ];

  res.json(message);
});

export default indexRouter;
