import { BooksInfo } from "../models/books-info.js";
import { BooksValidation } from "../modules/joi.js";

export const BooksController = async (req, res) => {
  try {
    const data = await BooksValidation(req.body);
    const book = await BooksInfo.findOne({
      title: data.title,
      author: data.author,
    });

    if (book) throw new Error("This book already created!");
    await BooksInfo.create(data);
    res.status(200).json({ ok: true, book: data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBooksController = async (req, res) => {
  try {
    const books = await BooksInfo.find();
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export const getBookController = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await BooksInfo.findById({ _id: id });
    res
      .status(200)
      .json({ ok: true, message: "The book was found successfully", book });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteBookController = async (req, res) => {
  try {
    const id = await req.params.id;
    const book = await BooksInfo.findByIdAndDelete({ _id: id });
    if (!book) throw new Error("Book not found!");
    res
      .status(200)
      .json({ message: "Book removed success!", removedBook: book });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editBookController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BooksValidation(req.body);
    const book = await BooksInfo.findByIdAndUpdate({ _id: id }, data);
    res.status(200).json({
      ok: true,
      message: "Book edited successfully!",
      updatedBook: book,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
