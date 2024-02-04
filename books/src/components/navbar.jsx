import { Box, Stack } from "@mui/material";
import { logo, navbar_icon, search } from "../images";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = ({ setData, data, getBooks }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = async (e) => {
    try {
      const target = e.target.value;
      setSearchTerm(target);

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          justifyContent: "start",
          gap: { xs: "0", sm: "25px" },
        }}
      >
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/main")}
          style={{ cursor: "pointer" }}
        />
        <Box display={"flex"} gap={"10px"}>
          <img src={search} style={{ cursor: "pointer" }} alt="search" />
          <input
            onChange={(e) => searchHandler(e)}
            value={searchTerm}
            type="text"
            placeholder="Search for any training you want"
            className="searchinput"
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={"20px"}
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: { xs: "5px", sm: "5px 20px" },
        }}
      >
        <img src={navbar_icon} alt="icon" style={{ cursor: "pointer" }} />
        <AccountCircleIcon
          onClick={() => navigate("/user")}
          sx={{
            fontSize: "30px",
            cursor: "pointer",
            border: "2px solid red",
            borderRadius: "50%",
            backgroundColor: "blue",
            color: "white",
          }}
        />
      </Box>
    </Stack>
  );
};

export default Navbar;
