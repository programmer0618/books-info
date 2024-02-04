import { Box, Stack, Typography } from "@mui/material";

const Lines = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"10px"}
      mt={"20px"}
      mb={"20px"}
    >
      <Box width={"45%"} sx={{ display: "flex", alignItems: "center" }}>
        <Box width={"100%"} sx={{ backgroundColor: "gray" }} height={"2px"} />
      </Box>
      <Typography sx={{ color: "gray", fontSize: "13px" }}>OR</Typography>
      <Box width={"45%"} sx={{ display: "flex", alignItems: "center" }}>
        <Box width={"100%"} sx={{ backgroundColor: "gray" }} height={"2px"} />
      </Box>
    </Stack>
  );
};

export default Lines;
