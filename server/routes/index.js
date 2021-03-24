var express = require('express');
var router = express.Router();
const habitsController = require('../controllers/habits.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:userId/habit-name', async function(req, res, next) {
  const habitName = await habitsController.getHabitNameByUserId('123');
  res.send(habitName);
});
router.get('/:userId/habit-type', async function(req, res, next) {
  const habitType = await habitsController.getHabitTypeByUserId('123');
  res.send(habitType);
});
router.get('/:userId/habit-value', async function(req, res, next) {
  const habitValue = await habitsController.getHabitValueByUserId('123');
  res.send(habitValue);
});

module.exports = router;
