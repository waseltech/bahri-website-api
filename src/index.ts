import mongoose from "mongoose";
import { app, port } from "./app";
import "express-async-errors";



 (async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/website");
    console.log("connecting success to mongo db");
    app.listen(port, () => {
      console.log(`category-api listening at http://localhost:${port}`);
    });
  } catch (error: any) {
    throw new Error(error);
  }
})()