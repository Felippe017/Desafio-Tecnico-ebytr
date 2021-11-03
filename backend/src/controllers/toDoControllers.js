const { StatusCodes } = require('http-status-codes');
const { createTasks } = require('../models/toDoModel');

const createTask = async (req, res) => {
  const { task, statusTask } = req.body;

  const tasks = await createTasks({ task, statusTask });

  return res.status(StatusCodes.CREATED).json({ tasks });
};

module.exports = {
  createTask,
};
