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

    // Add task to tasks array
    data.push(task);

    // Add tasks back to tasks.json
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

  jsonReader("./tasks.json", (err, data) => {
    if (err) return res.json({ message: err.message });

    // Delete an element with the given id using filter method
    const newData = data.filter((task) => task.id !== id);

    // Add back tasks array to file tasks.json
    fs.writeFile("./tasks.json", JSON.stringify(newData), (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ message: "Task deleted successfully!" });
    });
  });
};

export const updateTaskStatus = (req, res) => {
  let { id } = req.params;

  jsonReader("./tasks.json", (err, data) => {
    if (err) return res.json({ message: err.message });

    // Update task status with the given id using map method
    const newData = data.filter((task) => {
      if (task.id === id) {
        task.status = "done";
        return task;
      } else return task;
    });

    // Add back tasks array to file tasks.json
    fs.writeFile("./tasks.json", JSON.stringify(newData), (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ message: "Task status updated successfully!" });
    });
  });
};
