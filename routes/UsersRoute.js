import express from "express";
import {
  createUsers,
  deleteUsers,
  getUsers,
  getUsersById,
  updateUsers,
} from "../controllers/UsersControllers.js";
import { usersMiddleware } from "../middleware/UsersMiddleWare.js";

const router = express.Router();

router.get("/users", usersMiddleware, getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUsers);
router.patch("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);

export default router;
