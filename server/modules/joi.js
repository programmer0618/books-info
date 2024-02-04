import joi from "joi";

export const AuthValidation = async (data) => {
  try {
    return joi
      .object({
        username: joi.string(),
        email: joi
          .string()
          .email()
          .required()
          .error(new Error("Email is Invalid")),
        password: joi
          .string()
          .required()
          .min(8)
          .max(12)
          .error(new Error("Password wrong entry!")),
      })
      .validate(data).value;
  } catch (error) {
    console.log(error);
  }
};

export const BooksValidation = (data) => {
  try {
    return joi
      .object({
        title: joi.string().required(),
        author: joi.string().required(),
        description: joi.string().required(),
        published: joi.string().required(),
        pages: joi.number().required(),
      })
      .validateAsync(data);
  } catch (error) {
    console.log(error);
  }
};
