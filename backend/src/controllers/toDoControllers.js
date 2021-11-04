const { StatusCodes } = require('http-status-codes');
const { getAll/* , deleteTask  */ } = require('../models/toDoModel');

const {
  createTaskService, getByIdTaskService, updatedTaskService, deletedTaskService,
} = require('../services/toDoService');

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
  const tasks = await getByIdTaskService({ id });

  if (tasks.message) {
    return res.status(tasks.code).json({
      message: tasks.message,
    });
  }

  return res.status(StatusCodes.OK).json(tasks);
};

const updatedTask = async (req, res) => {
  const { task, statusTask } = req.body;
  const { id } = req.params;

  const taskId = await updatedTaskService({ task, statusTask }, id);
  if (taskId.message) {
    return res.status(taskId.code).json({
      message: taskId.message,
    });
  }
  return res.status(StatusCodes.OK).json({ _id: id, task, statusTask });
};

const deletedTask = async (req, res) => {
  const { id } = req.params;

  const deleteTask = await deletedTaskService({ id });

  if (deleteTask.message) {
    return res.status(deleteTask.code).json({
      message: deleteTask.message,
    });
  }
  /*  await deleteTask({ id }); */
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
