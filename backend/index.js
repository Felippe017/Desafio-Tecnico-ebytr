const express = require('express');
const bodyParser = require('body-parser');
const lists = require('./src/routers/toDoRoute');

require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

app.use('/tasks', lists);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
