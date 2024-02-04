import { Box, Button, Stack, Typography } from "@mui/material";
import { BookCard, Navbar } from "./index";
import CreateBook from "./create-book";
import { useEffect, useState } from "react";
import BookService from "../services/book";
import { error } from "../images";
import Loader from "./loader";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleModal = (e) => {
    setModal((prev) => !prev);
  };

  const token = localStorage.getItem("Token");

  const getBooks = async () => {
    setIsLoading(true);
    try {
      const data = await BookService.getBooks();
      setData(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
    } else {
      navigate("/");
    }

    getBooks();
  }, []);
  const searchHandler = (e) => {
    const target = e.target.value;
    setState(target);

    if (target.trim() == "") {
      getBooks();
    }

    const filteredBooks = data.filter((book) => {
      if (
        book.title.toLowerCase().includes(target.toLowerCase()) ||
        book.description.toLowerCase().includes(target.toLowerCase())
      ) {
        return book;
      }
    });
    setData(filteredBooks);
  };

  return (
    <Stack>
      <Navbar data={data} setData={setData} getBooks={getBooks} />

      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          <Box
            sx={{
              mt: "20px",
              display: "flex",
              alignItems: { xs: "start", sm: "center" },
              justifyContent: { xs: "start", sm: "space-between" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight={"bold"} color={"white"}>
                You've got <span style={{ color: "#6200EE" }}>7 book</span>
              </Typography>
              <Typography
                variant="subtitle2"
                color={"white"}
                mt={"5px"}
                sx={{ fontWeight: "300", letterSpacing: ".4px" }}
              >
                Your task today
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"20px"}
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                marginTop: { xs: "20px", sm: "20px" },
                width: { xs: "100%", sm: "420px" },
              }}
            >
              <input
                type="text"
                onChange={(e) => searchHandler(e)}
                value={state}
                placeholder="Enter your name"
                style={{
                  padding: "7px 20px",
                  border: "none",
                  boxShadow: ".1px .1px 1px gray",
                  width: "200px",
                }}
                className="input-create"
              />

              <Button
                onClick={toggleModal}
                variant="contained"
                className="created"
                sx={{
                  textTransform: "inherit",
                  padding: "5px 30px",
                  width: { xs: "100%", sm: "200px" },
                  backgroundColor: "#6200EE",
                }}
              >
                + Create a book
              </Button>
            </Box>
          </Box>
          {data.length == 0 ? (
            <Box width={"100%"} margin={"auto"} textAlign={"center"}>
              <img src={error} alt="err" />
            </Box>
          ) : (
            <Box
              mt={"30px"}
              display={"flex"}
              alignItems={"start"}
              flexWrap={"wrap"}
              sx={{
                justifyContent: { sm: "center", md: "start" },
              }}
              gap={"20px"}
            >
              {data.map((item) => (
                <BookCard
                  {...item}
                  key={item._id}
                  getBooks={getBooks}
                  data={data}
                />
              ))}
            </Box>
          )}
        </Box>
      )}

      {modal && <CreateBook setModal={setModal} getBooks={getBooks} />}
    </Stack>
  );
};

export default Main;
