import { Router } from "express";
import { getUserController } from "../controller/authorization.js";

const UserRoute = Router();

UserRoute.get("/:id", getUserController);

export default UserRoute;
