const habitsModel = require("../models/habits.model");

const habitsController = {
    getHabitValueByUserId: async (userId) => {
        const habits = await habitsModel.getHabitValueByUserId(userId);
        return habits;
    },
    getHabitNameByUserId: async (userId) => {
        const habitNames = await habitsModel.getHabitNameByUserId(userId);
        return habitNames;
    },
    getHabitTypeByUserId: async (userId) => {
        const habitTypes = await habitsModel.getHabitTypeByUserId(userId);
        return habitTypes;
    },
};

module.exports = habitsController;
