import { Box, Button } from "@mui/material";
import { delet, edit } from "../images";
import BookService from "../services/book";
import { toast } from "react-toastify";
import Edit from "./edit";
import { useState } from "react";

const EditDelete = ({ id, getBooks }) => {
  const [modal, setModal] = useState(false);
  const deleteHandler = async () => {
    await BookService.deleteBook(id);
    toast.success("Book removed successfully!", { position: "top-center" });
    getBooks();
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      position={"absolute"}
      top={"-20px"}
      right={"-50px"}
      gap={"0px"}
      zIndex={10}
    >
      <Button
        onClick={deleteHandler}
        sx={{
          cursor: "pointer",
          background: "none",
          outlineoffset: "none",
          padding: "none",
          margin: "none",
          width: "20px",
          height: "40px",
          pt: "20px",
          overflow: "hidden",
        }}
      >
        <img
          src={delet}
          alt="delete"
          width={"100px"}
          height={"100px"}
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </Button>
      <Button
        onClick={() => setModal(true)}
        sx={{
          cursor: "pointer",
          outlineoffset: "none",
          padding: "none",
          margin: "none",
          width: "20px",
          height: "40px",
          pt: "20px",
          overflow: "hidden",
        }}
      >
        <img
          src={edit}
          alt="edit"
          width={"100px"}
          height={"100px"}
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </Button>
      {modal ? <Edit id={id} setModal={setModal} getBooks={getBooks} /> : ""}
    </Box>
  );
};

export default EditDelete;
