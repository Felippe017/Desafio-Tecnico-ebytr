const { connection } = require('./connection');

const getAll = async () => {
  const tasksCollection = await connection();
  const dbTasks = await tasksCollection.collection('toDo');
  const tasks = await dbTasks.find().toArray();
  return tasks;
};

const createTasks = async ({ task }) => {
  const tasksCollection = await connection();
  const dbTasks = await tasksCollection.collection('toDo');
  const createTask = await dbTasks.insertOne({ task });
  return createTask;
};

module.exports = {
  getAll,
  createTasks,
};
