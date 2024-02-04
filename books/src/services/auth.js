import { toast } from "react-toastify";
import axios from "./api";

const AuthService = {
  userRegister: async (user) => {
    try {
      const { data } = await axios.post("register", user);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  userLogin: async (user) => {
    try {
      const { data } = await axios.post("login", user);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getUser: async (userId) => {
    try {
      const data = await axios.get(`get-user/${userId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default AuthService;
