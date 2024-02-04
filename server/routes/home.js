import { Router } from "express";

const HomeRoute = Router();

HomeRoute.get("/", (req, res) => {
  res.send("Salom Kitoblar olamiga xush kelibsiz!");
});

export default HomeRoute;
