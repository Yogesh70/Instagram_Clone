let factory = require('./factoryModel');

let create = factory.createFactory("comments");

let getById = factory.getByIdFactory("comments");

let update = factory.updateFactory("comments");

let deleteById = factory.deleteFactory("comments");

module.exports = {
    create,
    getById,
    update,
    deleteById
};
