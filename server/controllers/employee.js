const model = require('../models/employee');
const controller = {};

controller.list = async (req, res) => {
    const employees = await model.find();
    res.json(employees);
};

controller.create = () => { };

controller.read = (req, res) => { };

controller.update = () => { };

controller.delete = () => { };

module.exports = controller;