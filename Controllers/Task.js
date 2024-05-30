import { StatusCodes } from "http-status-codes";

// Imports from another files
import NotFoundError from '../Errors/not-found.js'

const tasks = [];

// desc: Getting all tasks      route: /api/tasks
export const getAllTasks =  (req, res) => {
   res.status(StatusCodes.OK).json({tasks})
};

// desc: Adding new task      route: /api/tasks
export const createNewTask =  (req, res) => {
 const { title } = req.body;
 const id =  Date.now().toString()
 const completed = false;
 tasks.unshift({ id, title, completed });
 res.status(StatusCodes.CREATED).json({ message: "Task added Successfully" });
};

// desc: Retriewing a unique task      route: /api/tasks/:id
export const getSingleTask =  (req, res) => {
    const { id } = req.params;
    const task = tasks.find((task) => task.id === id)
    if(!task) throw new NotFoundError("Task NotFound")
    res.status(StatusCodes.OK).json({ task });
};

// desc: Upadating a unique task      route: /api/tasks/:id
export const updateTask =  (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = tasks.find((task) => task.id === id);
    if (!task) throw new NotFoundError("Task NotFound");
    task.id = Date.now().toString();
    task.title = title;
    task.completed = completed;
    res.status(StatusCodes.OK).json({ message: "Task updated successfully" });
};

// desc: Deleting a unique task      route: /api/tasks/:id
export const deleteTask =  (req, res) => {
    const { id } = req.params;
        const taskIndex = tasks.findIndex((task) => task.id === id);
        if (taskIndex === -1) 
          throw new NotFoundError("Task NotFound"); 
          tasks.splice(taskIndex, 1);
       res.status(StatusCodes.OK).json({ message: 'Task deleted successfully' });
};

