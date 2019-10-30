const Employee = require('../models/employee');
const controller = {};

controller.list = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

controller.create = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        status: 'Employee saved'
    });
};

controller.read = (req, res) => { };

controller.update = () => { };

controller.delete = () => { };

module.exports = controller;