import { Router } from "express";
import { LoginController } from "../controller/authorization.js";

const LoginRoute = Router();

LoginRoute.post("/", LoginController);

export default LoginRoute;
