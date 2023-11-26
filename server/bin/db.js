// Set up mongoose connection
import mongoose from "mongoose";

const connection = mongoose.connection;

mongoose.set("strictQuery", false);
const mongoDB = process.env.DB_CONNECTION;

export default async function connectToDb() {
  await mongoose.connect(mongoDB);
  // Check the connection status
  if (connection.readyState === 1) {
    console.log("Connected");
  } else if (connection.readyState === 2) {
    console.log("Connection is opening");
  } else if (connection.readyState === 3) {
    console.log("Connection is closing");
  } else if (connection.readyState === 0) {
    console.log("Connection is disconnected");
  }
}
