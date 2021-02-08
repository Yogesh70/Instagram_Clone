// SQL Queries will be made here
const connection = require('./connection');
// npm i nodemon --save-dev
// npm i uuid
const { v4: uuidv4 } = require('uuid');
// const userModel = {};
const factory = require('./factoryModel');


// create user
let create = factory.createFactory("user");

// getby Uid
let getById = factory.getByIdFactory("user");

// update
let update = factory.updateFactory("user");

// delete
let deleteById = factory.deleteFactory("user");

// send request
// receive request

module.exports = {
    create,
    getById,
    update,
    deleteById
};