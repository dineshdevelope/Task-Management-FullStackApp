import express from "express";
import {
  CreateUser,
  DeleteUser,
  SingleUser,
  UpdateUser,
  UserIndex,
} from "../controllers/user.controller.js";

const router = express.Router();

//CRUD Functionality

//R-Read

router.get("/", UserIndex);

//Single Data
router.get("/:id", SingleUser);

//C-Create

router.post("/", CreateUser);

//U- Update

router.put("/:id", UpdateUser);

//U- Update

router.delete("/:id", DeleteUser);

export default router;
