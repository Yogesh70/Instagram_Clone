// SQL Queries will be made here
const connection = require('./connection');
// npm i nodemon --save-dev
// npm i uuid
const { v4: uuidv4 } = require('uuid');
const userModel = {};

// create
let create = (userObj) => {
    // creating uniqueId 
    userObj.uid = uuidv4();
    // create user
    return new Promise(function(resolve, reject) {
        connection.query("INSERT INTO user SET ?", userObj , function (err, res) {
            if (err) {
                reject(err);
                return;
            } else {
                resolve(res);
            }
        })  
    })
}

// getby Uid
let getById = (uid) => {
    return new Promise(function(resolve, reject) {
        connection.query(`SELECT * from user WHERE uid= "${uid}"`, function (err, res) {
            if (err) {
                reject(err);
                return;
            } else {
                resolve(res[0]);
            }
        })  
    })
}

// update
// delete
// send request
// receive request

module.exports = {
    create,
    getById
};