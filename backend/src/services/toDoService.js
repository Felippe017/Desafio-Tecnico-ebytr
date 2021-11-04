const {
/*  getByid,  */updateTask, deleteTask, createTasks,
} = require('../models/toDoModel');

const { taskValidations } = require('../validations/validationsTasks');

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

/* const getAllTasksService = async (_req, res) => {
  const tasks = await getAll();
  return res.status(StatusCodes.OK).json(tasks);
}; */

/* const getByIdTaskService = async ({ id }) => {
  const tasks = await getByid({ id });
  return tasks;
};
 */
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
  /*   getAllTasksService,
  getByIdTaskService, */
  updatedTaskService,
  deletedTaskService,
};
