import express from "express";
import dotenv from "dotenv";
import RegisterRoute from "./routes/register.js";
import LoginRoute from "./routes/login.js";
import HomeRoute from "./routes/home.js";
import UserRoute from "./routes/user.js";
import mongoose from "mongoose";
import { BooksRoute } from "./routes/books.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/register", RegisterRoute);
app.use("/login", LoginRoute);
app.use("/", HomeRoute);
app.use("/get-user", UserRoute);
app.use("/books", BooksRoute);

const serverLocal = () => {
  try {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log("Server is running on PORT:", PORT));
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("Mongo DB connect!");
      })
      .catch((error) => {
        console.log("Mongo DBga ulanishda Xato" + error);
      });
  } catch (error) {
    console.log("Error", error);
  }
};

serverLocal();
