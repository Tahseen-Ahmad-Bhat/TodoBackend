import fs from "fs";
import { jsonReader } from "../util/helper.js";

export const getTasks = (req, res) => {
  fs.readFile("./tasks.json", (err, data) => {
    if (err) {
      // console.log(err);
      res.status(500).json({ message: "Something went wrong!" });
    } else {
      const tasks = JSON.parse(data);
      res.status(200).json({ tasks });
    }
  });
};

export const addTask = (req, res) => {
  const task = req.body;
  jsonReader("./tasks.json", (err, data) => {
    if (err) return res.json({ message: err.message });
    task.id = data.length;
    data.push(task);
    fs.writeFile("./tasks.json", JSON.stringify(data), (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ message: "Successfully added task!" });
    });
  });
};

export const deleteTask = (req, res) => {
  // console.log(req.params);
  // console.log(req.query);
  let { id } = req.params;

  // Conversion of string to number
  id = Number(id);

  jsonReader("./tasks.json", (err, data) => {
    if (err) return res.json({ message: err.message });

    // Delete an element with the given id using filter method
    const newData = data.filter((task) => task.id !== id);

    fs.writeFile("./tasks.json", JSON.stringify(newData), (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ message: "Task deleted successfully!" });
    });
  });
};
