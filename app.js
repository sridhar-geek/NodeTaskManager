import express from "express";
import dotenv from "dotenv";
import "express-async-errors";

dotenv.config();
const app = express();

// Import from another files
import NotFound from "./Middleware/not-found.js";
import ErrorHandlerMiddleware from "./Middleware/error-handler.js";
import TaskRoutes from './Routes/Task.js'

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// routes
app.use("/api/tasks", TaskRoutes);
app.use(NotFound);
app.use(ErrorHandlerMiddleware)

const PORT = process.env.PORT || 4000;

const start = () => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

start();
