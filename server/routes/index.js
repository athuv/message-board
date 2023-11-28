import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import Message from "../model/message.js";
import Pusher from "pusher";

var indexRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "./messages.json");

const currentDate = new Date();
const formattedDate = `${currentDate.getFullYear()}-${
  currentDate.getMonth() + 1
}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

const pusher = new Pusher({
  appId: "1715977",
  key: "65b8a194319229e518f4",
  secret: "03bebfd349f010a16b4c",
  cluster: "ap2",
  useTLS: true,
});

const messageChangeStream = Message.watch();

messageChangeStream.on("change", async (change) => {
  const data = await Message.find({});
  pusher.trigger("my-channel", "my-event", data);
});

indexRouter.get("/", function (req, res, next) {
  const getMessages = async () => {
    const data = await Message.find({});
    res.json(data);
  };

  try {
    getMessages();
  } catch (error) {
    console.log(error);
  }
});

indexRouter.post("/", function (req, res, next) {
  const saveMessage = async () => {
    const newMessage = new Message({
      name: req.body.name,
      message: req.body.message,
    });
    const newMessageResult = await newMessage.save();
    console.log(newMessageResult);
  };

  try {
    saveMessage();
    res.json("Message sent successfully");
  } catch (error) {
    console.log(error);
  }
});

indexRouter.delete("/", function (req, res, next) {
  const deleteMessage = async () => {
    await Message.deleteMany({});
  };

  try {
    deleteMessage();
    res.json("Data deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

export default indexRouter;
