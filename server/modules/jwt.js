import jwt from "jsonwebtoken";

export const createToken = (data) => {
  const token = jwt.sign(data, process.env.SECRET_KEY);
  return token;
};

export const verifyToken = (token) => {
  try {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (verify) {
      return verify;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error");
  }
};
