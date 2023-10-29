import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import taskRoutes from "./routes/taskRoutes.js";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/task/", taskRoutes);

app.use("/api/task", taskRoutes);

// app.use('/')

app.listen(PORT, () => {
  console.log("App is listening at port " + PORT);
});
