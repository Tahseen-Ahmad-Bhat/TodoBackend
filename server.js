import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import taskRoutes from "./routes/taskRoutes.js";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/task", taskRoutes);

// For handling random route
app.use("/*", (req, res) => {
  res.status(404).json({ message: "Page not found!" });
});

app.listen(PORT, () => {
  console.log("App is listening at port " + PORT);
});
