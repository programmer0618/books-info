import { Box, Button, Stack } from "@mui/material";
import { Input } from "./index";
import { useState } from "react";
import BookService from "../services/book";
import { useNavigate } from "react-router-dom";

const CreateBook = ({ setModal, getBooks }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    title: "",
    author: "",
    description: "",
    published: "",
    pages: "",
  });

  const navigate = useNavigate();

  const closeHandler = () => {
    setModal((prev) => !prev);
  };

  const bookHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await BookService.createBook(state);
      setIsLoading(false);
      getBooks();
      closeHandler();
      navigate("/main");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

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
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"5px 10px 5px 0"}
          marginBottom={"10px"}
        >
          <span>Create a book</span>
          <span
            style={{
              cursor: "pointer",
              padding: ".1px 6px 1px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid gray",
              fontSize: "15px",
              borderRadius: "50%",
            }}
            className="closebook"
            onClick={closeHandler}
          >
            &times;
          </span>
        </Box>
        <form onSubmit={bookHandler}>
          <Box>
            <Input
              label={"title"}
              name={"title"}
              state={state}
              setState={setState}
            />
            <Input
              label={"author"}
              name={"author"}
              state={state}
              setState={setState}
            />
            <Input
              label={"description"}
              name={"description"}
              state={state}
              setState={setState}
            />
            <Input
              label={"published"}
              name={"published"}
              state={state}
              setState={setState}
            />
            <Input
              label={"pages"}
              name={"pages"}
              state={state}
              setState={setState}
            />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Button
              variant="outlined"
              sx={{ textTransform: "inherit", width: "50%" }}
              type="button"
              onClick={closeHandler}
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

export default CreateBook;
