import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { errorHandlerMiddleware, NotFoundError } from "@meemsd/common";
import "express-async-errors";
import { collegeRouter } from "./college";
import { newsRouter } from "./news";

const app = express();
const port = 4000;

app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from dashboard api");
});

app.use("/api/colleges", collegeRouter);
app.use("/api/news", newsRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandlerMiddleware);

export { app, port };
