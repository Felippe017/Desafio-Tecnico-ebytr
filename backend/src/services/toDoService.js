const {
  getByid, updateTask, deleteTask, createTasks,
} = require('../models/toDoModel');

const { taskValidations, taskValidationsId } = require('../validations/validationsTasks');

const createTaskService = async ({ task, statusTask }) => {
  const validations = taskValidations(task, statusTask);

  if (validations.message) {
    return {
      message: validations.message,
      code: validations.code,
    };
  }

  const tasks = await createTasks({ task, statusTask });
  return tasks;
};

const getByIdTaskService = async ({ id }) => {
  const validateId = await taskValidationsId({ id });

  if (validateId.message) {
    return {
      message: validateId.message,
      code: validateId.code,
    };
  }

  const tasks = await getByid({ id });
  return tasks;
};

const updatedTaskService = async ({ task, statusTask }, id) => {
  const validations = taskValidations({ task, statusTask });

  if (validations.message) {
    return {
      message: validations.message,
      code: validations.code,
    };
  }

  await updateTask({ task, statusTask }, id);
  return { _id: id, task, statusTask };
};

const deletedTaskService = async ({ id }) => {
  await deleteTask({ id });
};

module.exports = {
  createTaskService,
  getByIdTaskService,
  updatedTaskService,
  deletedTaskService,
};
