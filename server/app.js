import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(cors());
const currentModuleURL = import.meta.url;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(currentModuleURL, "public")));

app.use("/", indexRouter);

export default app;
