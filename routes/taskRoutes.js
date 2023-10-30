import express from "express";

import {
  addTask,
  deleteTask,
  getTasks,
} from "../controllers/taskControllers.js";

const router = express.Router();

router.get("/get-tasks", getTasks);

router.post("/add-task", addTask);

router.delete("/delete-task/:id", deleteTask);

export default router;
