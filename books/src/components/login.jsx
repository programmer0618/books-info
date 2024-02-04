import { Button, Stack, Typography } from "@mui/material";
import { facebook, google } from "../images";
import { ButtonComponent, Input, Lines } from "./index";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth";
import { toast } from "react-toastify";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("Token");

  if (token) {
    navigate("/main");
  }

  const loginHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await AuthService.userLogin(state);
      setIsLoading(false);
      localStorage.setItem("Token", response.token);
      localStorage.setItem("id", response?.user?._id);
      toast.success("Login successfully!");
      navigate("/main");
    } catch (error) {
      setState({ username: "", email: "", password: "" });
      toast.error("Email or Password error!", { position: "top-center" });
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
        marginTop: { xs: "40px", md: "50px" },
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
        Sign in
      </Typography>
      <ButtonComponent img={google} name={"Google"} variant={"outlined"} />

      <ButtonComponent img={facebook} name={"Facebook"} variant={"outlined"} />
      <Lines />
      <form onSubmit={loginHandler}>
        <Input
          label={"username"}
          name={"username"}
          state={state}
          setState={setState}
        />
        <Input
          type={"email"}
          label={"email"}
          name={"email"}
          state={state}
          setState={setState}
        />
        <Input
          type={"password"}
          label={"password"}
          mb="30px"
          name={"password"}
          state={state}
          setState={setState}
        />
        <Button
          type="submit"
          className="loginbtn"
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#6200ee",
            textTransform: "inherit",
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
          <Link
            to={"/register"}
            className="sign_up"
            style={{ textDecoration: "none" }}
          >
            Go to sign up.
          </Link>
        </Typography>
      </form>
    </Stack>
  );
};

export default Login;
