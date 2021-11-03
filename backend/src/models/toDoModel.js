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
  const createTask = await dbTasks.insertOne({ task, statusTask, dateCreated: new Date() });
  return createTask;
};

const getByid = async ({ id }) => {
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
  const dbTasks = await tasksCollection.collection('toDo');
  const tasksUpdate = await dbTasks.updateOne({ _id: ObjectId(id) },
    {
      $set: { task, statusTask },
    });

  return tasksUpdate;
};

const deleteTask = async ({ id }) => {
  if (!ObjectId.isValid(id)) return null;

  const tasksCollection = await connection();
  const dbTasks = await tasksCollection.collection('toDo');
  const taskDeleted = await dbTasks.deleteOne({ _id: ObjectId(id) });

  return taskDeleted;
};

module.exports = {
  getAll,
  createTasks,
  getByid,
  updateTask,
  deleteTask,
};
