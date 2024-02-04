import { Box, Typography } from "@mui/material";
import { useState } from "react";
import EditDelete from "./edit_delete";
import moment from "moment";

const BookCard = ({
  _id,
  title,
  author,
  description,
  pages,
  createdAt,
  data,
  getBooks,
}) => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState(data);

  const toggleCard = (id) => {
    return data.map((item) => {
      if (item?._id === id) {
        setVisible(true);
      }
    });
  };

  const deleteToggle = (id) => {
    return setState((prev) =>
      prev.map((item) => {
        if (id !== item?._id) {
          setVisible(false);
        }
      })
    );
  };

  return (
    <Box position={"relative"} display={"flex"}>
      <Box
        onMouseEnter={() => toggleCard(_id)}
        onMouseLeave={() => deleteToggle(_id)}
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "2px 2px 5px rgb(91, 80, 50)",
          width: { xs: "100%", sm: "300px", md: "400px" },
          minHeight: { sm: "200px", md: "200px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          transition: "all 1s ease",
        }}
        className="cardbook"
      >
        <Box position={"relative"}>
          {visible && <EditDelete id={_id} getBooks={getBooks} />}
        </Box>

        <Box>
          <Typography fontSize={"16px"} mb={"10px"} fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography variant="subtitle2" color={"gray"}>
            {description}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={"20px"}
        >
          <Box display={"flex"} gap={"20px"}>
            <Typography variant="caption" fontWeight={"bold"} color={"gray"}>
              {author}
            </Typography>
            <Typography variant="caption" color={"gray"}>
              {moment(createdAt).format("DD-MMMM-YYYY, HH:mm")}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#EFE6FD",
              color: "#9654F4",
              padding: "3px 20px",
            }}
          >
            {pages}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BookCard;
