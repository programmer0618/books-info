import { Router } from "express";
import { RegisterController } from "../controller/authorization.js";

const RegisterRoute = Router();

RegisterRoute.post("/", RegisterController);

export default RegisterRoute;
