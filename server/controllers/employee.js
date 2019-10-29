const model = require('../models/employee');
const controller = {};

controller.list = (req, res) => {
    model.find();
};

controller.create = () => { };

controller.read = (req, res) => { };

controller.update = () => { };

controller.delete = () => { };

module.exports = controller;