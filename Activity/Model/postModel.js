const factory = require('./factoryModel');

let create = factory.createFactory("post");

let getById = factory.getByIdFactory("post");

let update = factory.updateFactory("post");

let deleteById = factory.deleteFactory("post");

module.exports = {
    create,
    getById,
    update,
    deleteById
};
