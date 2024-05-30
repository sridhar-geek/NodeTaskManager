import express from "express";
const router = express.Router();

import {
  getAllTasks,
  createNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from '../Controllers/Task.js';

// actual routes
router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").get(getSingleTask).put(updateTask).delete(deleteTask);

export default router; 
