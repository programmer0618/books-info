import { Box, Button, Stack } from "@mui/material";
import { error } from "../images";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Stack mx={"auto"}>
      <Box width={"100%"} sx={{ mt: { xs: "70px", sm: "40px" } }}>
        <img src={error} width={"100%"} alt="error" />
      </Box>
      <Box display={"flex"} gap={"20px"} mt={"50px"}>
        <Button
          onClick={() => navigate("/main")}
          variant="contained"
          className="created"
          sx={{
            textTransform: "inherit",
            padding: "5px 30px",
            width: { xs: "100%", sm: "50%" },
            backgroundColor: "#6200EE",
          }}
        >
          Go Home Page
        </Button>
        <Button
          sx={{ textTransform: "inherit", width: { xs: "100%", sm: "50%" } }}
          variant="outlined"
          onClick={() => navigate("/main")}
        >
          Reolad Page
        </Button>
      </Box>
    </Stack>
  );
};

export default ErrorPage;
