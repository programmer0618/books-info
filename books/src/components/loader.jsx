import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      fontSize={"70px"}
      display={"flex"}
      height={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
