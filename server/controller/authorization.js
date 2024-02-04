import { User } from "../models/users.js";
import { compareCrypt, createCrypt } from "../modules/bcrypt.js";
import { AuthValidation } from "../modules/joi.js";
import { createToken, verifyToken } from "../modules/jwt.js";

export const RegisterController = async (req, res) => {
  try {
    const data = await AuthValidation(req.body);
    const user = await User.findOne({ email: data.email });
    if (user) throw new Error("This email already exist!");

    const newUser = {
      username: data.username,
      email: data.email,
      password: createCrypt(data.password, 10),
    };

    const token = createToken(newUser);

    const userId = await User.create(newUser);

    res
      .status(200)
      .json({ ok: true, token, userId, message: "Register successfully!" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

export const LoginController = async (req, res) => {
  try {
    const data = await AuthValidation(req.body);
    const user = await User.findOne({ email: data.email });
    if (!user) throw new Error("User not found!");
    const token = createToken({ user });
    const result = (req.headers["authorization"] = token
      ? `Token ${token}`
      : "");
    if (!result) throw new Error("Token is not defined!");
    const check = verifyToken(token);
    if (!check) throw new Error("Token is invalid!");

    const isTrust = await compareCrypt(data.password, user.password);
    if (!isTrust) throw new Error("Password is invalid!");

    res.status(200).json({ user, token, message: "Login successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    res.status(200).json({ ok: true, message: "Get User Success!", user });
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};
