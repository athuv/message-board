import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  name: { type: String, required: true, minLength: 2, maxLength: 10 },
  message: { type: String, required: true, minLength: 2, maxLength: 100 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Message", MessageSchema);
