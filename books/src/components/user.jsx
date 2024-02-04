import { Box, Button, Typography } from "@mui/material";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import AuthService from "../services/auth";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Loader from "./loader";

const User = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const getUser = async () => {
    const userId = localStorage.getItem("id");
    const { data } = await AuthService.getUser(userId);
    setData(data);
  };

  const logOutHandler = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("id");
    navigate("/");
  };
  const token = localStorage.getItem("Token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      getUser();
    }
  }, []);
  return data.length !== 0 ? (
    <>
      <Navbar />
      <Box
        sx={{ width: "100%" }}
        borderRadius={"10px"}
        mt={"10px"}
        padding={"40px 50px"}
        backgroundColor={"white"}
      >
        <Typography variant="h3" textAlign={"center"} mt={"20px"}>
          Your Profile Info
        </Typography>
        <Typography variant="subtitle1">
          Your Username -{" "}
          <span style={{ fontWeight: "bold" }}>{data.user.username}</span>
        </Typography>
        <Typography>
          Your Email -{" "}
          <span style={{ fontWeight: "bold" }}>{data.user.email}</span>
        </Typography>
        <Typography>
          Your registered date -{" "}
          <span style={{ fontWeight: "bold" }}>
            {moment(data?.user?.createdAt).format("DD-MM-YYYY, hh:ss")}
          </span>
        </Typography>
        <Box display={"flex"} gap={"10px"}>
          <Button
            onClick={() => navigate("/main")}
            variant="contained"
            sx={{ mt: "2rem" }}
          >
            Close
          </Button>
          <Button
            onClick={logOutHandler}
            variant="contained"
            color="error"
            sx={{ mt: "2rem" }}
          >
            Log Out
          </Button>
        </Box>
      </Box>
    </>
  ) : (
    <Loader />
  );
};

export default User;
