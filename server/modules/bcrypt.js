import bcrypt from "bcrypt";

export const createCrypt = (password, salt) => {
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

export const compareCrypt = async (hashPassword, password) => {
  const result = await bcrypt.compare(hashPassword, password);
  return result;
};
