import { Box, Button, Stack, Typography } from "@mui/material";
import ButtonComponent from "./button";
import { facebook, google } from "../images";
import { Input, Lines } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthService from "../services/auth";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ username: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const registerHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await AuthService.userRegister(state);
      setIsLoading(false);
      localStorage.setItem("Token", response.token);
      localStorage.setItem("id", response.userId._id);
      toast.success("You have successfully registered!", {
        position: "top-center",
      });
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack
      direction="column"
      sx={{
        mx: "auto",
        width: { md: "30%", sm: "70%", xs: "80%" },
        boxShadow: "3px 3px 2px lightgray",
        borderRadius: "5px",
        backgroundColor: "white",
        padding: "50px 30px",
        marginTop: { xs: "20px", md: "30px" },
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        sx={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Sign up
      </Typography>
      <ButtonComponent img={google} name={"Google"} variant={"outlined"} />

      <ButtonComponent img={facebook} name={"Facebook"} variant={"outlined"} />
      <Lines />
      <form onSubmit={registerHandler}>
        {Object.keys(state).map((item) => {
          return (
            <Box key={item}>
              <Input
                label={item}
                state={state}
                value={state}
                type={
                  item === "email"
                    ? "email"
                    : "" || item === "password"
                    ? "password"
                    : ""
                }
                setState={setState}
                name={item}
              />
            </Box>
          );
        })}
        <Button
          variant="contained"
          className="loginbtn"
          type="submit"
          sx={{
            textTransform: "inherit",
            width: "100%",
            backgroundColor: "#6200ee  ",
          }}
        >
          {isLoading ? "Loading..." : "Button"}
        </Button>
        <Typography
          variant="subtitle2"
          color={"gray"}
          textAlign={"center"}
          mt={"10px"}
        >
          Already signed up?{" "}
          <Link to={"/"} className="sign_up" style={{ textDecoration: "none" }}>
            Go to sign in.
          </Link>
        </Typography>
      </form>
    </Stack>
  );
};

export default Register;
