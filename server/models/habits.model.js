const mongoose = require('mongoose');
const Habit = mongoose.model('habits', {});
const User = mongoose.model('users', {});

const habitsModel = {
    getHabitValueByUserId: async (userId) => {
        const habits = await Habit.find({});
        return habits;
    },
    getHabitNameByUserId: async (userId) => {
        const habitNames = await User.find({}, 'habitName');
        return habitNames; 
    },
    getHabitTypeByUserId: async (userId) => {
        const habitTypes = await User.find({}, 'habitType');
        return habitTypes; 
    },
};

module.exports = habitsModel;