import { toast } from "react-toastify";
import axios from "./api";

const BookService = {
  createBook: async (book) => {
    try {
      const data = await axios.post("books/main", book);
      toast.success("Book created successfully.");
      return data;
    } catch (error) {
      console.log(error);
      toast.error(`${error?.response?.data?.message}`);
      console.log(error);
    }
  },
  getBooks: async () => {
    try {
      const { data } = await axios.get("books/get-books");
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getBook: async (id) => {
    try {
      const { data } = await axios.get(`books/get-book/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteBook: async (id) => {
    try {
      const data = await axios.delete(`books/delete/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  editBook: async (id, newBook) => {
    try {
      const data = await axios.put(`books/edit/${id}`, newBook);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default BookService;
