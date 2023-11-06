import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Mongodb connected successfully"))
  .catch((error) => console.log(error));

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
