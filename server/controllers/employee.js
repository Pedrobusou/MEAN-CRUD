const Model = require('../models/employee');
const controller = {};

controller.create = async (req, res) => {
    const item = new Model({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    await item.save();

    res.json({
        status: 'Creation success'
    });
};

controller.readAll = async (req, res) => {
    const list = await Model.find();
    res.json(list);
};

controller.read = async (req, res) => {
    const item = await Model.findById(req.params.id);
    res.json(item);
};

controller.update = async (req, res) => {
    await Model.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.json({
        status: 'Update success'
    });
};

controller.delete = async (req, res) => {
    await Model.findByIdAndRemove(req.params.id, { $set: req.body });
    res.json({
        status: 'Delete success'
    });
};

module.exports = controller;