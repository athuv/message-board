import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  name: { type: String, required: true, minLength: 2, maxLength: 10 },
  message: { type: String, required: true, minLength: 2, maxLength: 100 },
  date: { type: Date },
});

export default mongoose.model("Book", MessageSchema);
