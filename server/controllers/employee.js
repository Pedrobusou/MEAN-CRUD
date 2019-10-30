const Model = require('../models/employee');
const controller = {};

controller.list = async (req, res) => {
    const list = await Model.find();
    res.json(list);
};

controller.create = async (req, res) => {
    await new Model(req.body).save();

    res.json({
        status: 'Creation success'
    });
};

controller.read = async (req, res) => {
    const item = await Model.findById(req.params.id);
    res.json(item);
};

controller.update = () => { };

controller.delete = () => { };

module.exports = controller;