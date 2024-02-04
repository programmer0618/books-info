import { Stack } from "@mui/material";
import { ErrorPage, Login, Main, Register } from "./components";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "./components/user";

const App = () => {
  return (
    <Stack sx={{ paddingX: { sm: "20px", md: "80px" } }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} />
    </Stack>
  );
};

export default App;
