import { Router } from "express";
import {
  BooksController,
  getBooksController,
  deleteBookController,
  editBookController,
  getBookController,
} from "../controller/books.js";

export const BooksRoute = Router();

BooksRoute.get("/get-books", getBooksController);
BooksRoute.get("/get-book/:id", getBookController);
BooksRoute.post("/main", BooksController);
BooksRoute.delete("/delete/:id", deleteBookController);
BooksRoute.put("/edit/:id", editBookController);
