const { StatusCodes } = require('http-status-codes');
const { createTasks, getAll } = require('../models/toDoModel');

const createTask = async (req, res) => {
  const { task, statusTask } = req.body;

  const tasks = await createTasks({ task, statusTask });

  return res.status(StatusCodes.CREATED).json({ tasks });
};

const getAllTasks = async (req, res) => {
  const tasks = await getAll();
  return res.status(StatusCodes.OK).json({ tasks });
};

module.exports = {
  createTask,
  getAllTasks,
};
