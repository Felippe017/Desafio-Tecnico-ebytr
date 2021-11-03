const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const getAll = async () => {
  const tasksCollection = await connection();
  const dbTasks = await tasksCollection.collection('toDo');
  const tasks = await dbTasks.find().toArray();
  return tasks;
};

const createTasks = async ({ task, statusTask }) => {
  const tasksCollection = await connection();
  const dbTasks = await tasksCollection.collection('toDo');
  const createTask = await dbTasks.insertOne({ task, statusTask });
  return createTask;
};

const getAllByid = async ({ id }) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const tasksCollection = await connection();
  const dbTasks = await tasksCollection.collection('toDo');
  const tasks = await dbTasks.findOne({ _id: ObjectId(id) });
  return tasks;
};

const updateTask = async ({ task, statusTask }, id) => {
  if (!ObjectId.isValid(id)) return null;

  const tasksCollection = await connection();
  const dbTasks = tasksCollection.collection('toDo');
  const tasksUpdate = dbTasks.updateOne({ _id: ObjectId(id) },
    {
      $set: { task, statusTask },
    });

  return tasksUpdate;
};

module.exports = {
  getAll,
  createTasks,
  getAllByid,
  updateTask,
};
