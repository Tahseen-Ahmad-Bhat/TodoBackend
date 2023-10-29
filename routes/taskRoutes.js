import express from "express";

import { addTask, getTasks } from "../controllers/taskControllers.js";

const router = express.Router();

router.get("/get-tasks", getTasks);

router.post("/add-task", addTask);

export default router;
