import fs from "fs";
import { jsonReader } from "../util/helper.js";

export const getTasks = (req, res) => {
  fs.readFile("./tasks.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Something went wrong!" });
    } else {
      const task = JSON.parse(data);
      res.status(200).json(task);
    }
  });
};

export const addTask = (req, res) => {
  const task = req.body;
  jsonReader("./tasks.json", (err, data) => {
    if (err) return res.json({ message: err });
    task.id = data.length;
    data.push(task);
    fs.writeFile("./tasks.json", JSON.stringify(data), (err) => {
      if (err) return res.json({ error: err.message });
      res.json({ message: "Successfully added task!" });
    });
  });
};
