const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/Todolist';

const DB_NAME = process.env.DB_NAME || 'Todolist';

const connection = () => MongoClient
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(DB_NAME)) // nome do banco de dados
  .catch((err) => {
    console.error(err);
    process.exit();
  });

module.exports = {
  connection,
};
