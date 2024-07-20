import express from "express";
import { getUsers } from "../controllers/UsersControllers.js";
import { usersMiddleware } from "../middleware/UsersMiddleWare.js";

const router = express.Router();

router.get("/", usersMiddleware, getUsers);

export default router;
