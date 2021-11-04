const { StatusCodes } = require('http-status-codes');
const {
  /* createTasks,  */getAll, getByid, updateTask, deleteTask,
} = require('../models/toDoModel');

const { createTaskService } = require('../services/toDoService');

const createTask = async (req, res) => {
  const { task, statusTask } = req.body;

  const tasks = await createTaskService({ task, statusTask });

  if (tasks.message) {
    return res.status(tasks.code).json({
      message: tasks.message,
    });
  }

  return res.status(StatusCodes.CREATED).json(tasks);
};

const getAllTasks = async (_req, res) => {
  const tasks = await getAll();
  return res.status(StatusCodes.OK).json(tasks);
};

const getByIdTask = async (req, res) => {
  const { id } = req.params;
  const tasks = await getByid({ id });
  return res.status(StatusCodes.OK).json(tasks);
};

const updatedTask = async (req, res) => {
  const { task, statusTask } = req.body;
  const { id } = req.params;
  await updateTask({ task, statusTask }, id);
  return res.status(StatusCodes.OK).json({ _id: id, task, statusTask });
};

const deletedTask = async (req, res) => {
  const { id } = req.params;
  await deleteTask({ id });
  return res.status(StatusCodes.OK).json({
    message: 'task deletado com sucesso!',
  });
};

module.exports = {
  createTask,
  getAllTasks,
  getByIdTask,
  updatedTask,
  deletedTask,
};
