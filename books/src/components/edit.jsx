import { Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import BookService from "../services/book";
import EditInput from "./edit-input";

const Edit = ({ id, setModal, getBooks }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    title: "",
    author: "",
    description: "",
    published: "",
    pages: "",
  });

  const getBook = async () => {
    try {
      const { book } = await BookService.getBook(id);
      setIsLoading(false);
      const info = {
        title: book.title,
        author: book.author,
        description: book.description,
        published: book.published,
        pages: book.pages,
      };
      setState(info);
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const book = await BookService.editBook(id, state);
      getBooks();
      setIsLoading(false);
      setModal(false);
      return book;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <Stack
      sx={{ backgroundColor: "rgba(0,0,0,.5)" }}
      width={"100%"}
      height={"100%"}
      position={"fixed"}
      top={0}
      right={0}
      onClick={() => setModal(false)}
    >
      <Stack
        className="animation"
        sx={{
          width: { sm: "25%", xs: "90%" },
          backgroundColor: "white",
          mt: "30px",
          mx: "auto",
          borderRadius: "10px",
          padding: { sm: "30px", xs: "30px 10px" },
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          padding={"5px 10px 5px 0"}
          textAlign={"center"}
          marginBottom={"10px"}
        >
          <span>Edit a book</span>
        </Box>
        <form onSubmit={editHandler}>
          <Box>
            <EditInput
              label={"title"}
              name={"title"}
              value={state.title}
              state={state}
              setState={setState}
            />
            <EditInput
              label={"author"}
              name={"author"}
              value={state.author}
              state={state}
              setState={setState}
            />
            <EditInput
              label={"description"}
              name={"description"}
              value={state.description}
              state={state}
              setState={setState}
            />
            <EditInput
              label={"published"}
              name={"published"}
              value={state.published}
              state={state}
              setState={setState}
            />
            <EditInput
              label={"pages"}
              name={"pages"}
              state={state}
              setState={setState}
              value={state.pages}
            />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
            mt={"20px"}
          >
            <Button
              variant="outlined"
              sx={{ textTransform: "inherit", width: "50%" }}
              type="button"
              onClick={() => setModal(false)}
            >
              Close
            </Button>
            <Button
              type="submit"
              className="createclose"
              variant="contained"
              sx={{ textTransform: "inherit", width: "50%" }}
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </Box>
        </form>
      </Stack>
    </Stack>
  );
};

export default Edit;
