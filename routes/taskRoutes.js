import express from "express";

import {
  addTask,
  deleteTask,
  getTasks,
  updateTaskStatus,
} from "../controllers/taskControllers.js";

const router = express.Router();

router.get("/get-tasks", getTasks);

router.post("/add-task", addTask);

router.delete("/delete-task/:id", deleteTask);

router.post("/update-task/:id", updateTaskStatus);

export default router;
