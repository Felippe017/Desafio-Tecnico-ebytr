const express = require('express');
const {
  createTask, getAllTasks, getByIdTask, deletedTask, updatedTask,
} = require('../controllers/toDoControllers');

const router = express.Router();

router.post('/', createTask);

router.get('/:id', getByIdTask);

router.get('/', getAllTasks);

router.put('/:id', updatedTask);

router.delete('/:id', deletedTask);

module.exports = router;
