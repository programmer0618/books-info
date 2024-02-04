import { Schema, model } from "mongoose";

const BooksInfoSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    published: { type: String, required: true },
    pages: { type: Number, required: true },
  },
  { timestamps: true }
);

export const BooksInfo = model("BooksInfo", BooksInfoSchema);
