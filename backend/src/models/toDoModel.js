const { connection } = require('./connection');

const getAll = async () => {
  const tasksCollection = await connection();
  const dbTasks = await tasksCollection.collection('toDo');
  const tasks = await dbTasks.find().toArray();
  return tasks;
};

/* const createTasks = async () => {
    const tasksCollection = await connection();
    const dbTasks = await tasksCollection.collection('toDo');

}; */

module.exports = {
  getAll,
  /* createTasks, */
};
