// SQL Queries will be made here
const connection = require('./connection');
// npm i nodemon --save-dev
// npm i uuid
const { v4: uuidv4 } = require('uuid');
// const userModel = {};
const factory = require('./factoryModel');

// create
// let create = (userObj) => {
//     // creating uniqueId 
//     userObj.uid = uuidv4();
//     // create user
//     return new Promise(function(resolve, reject) {
//         connection.query("INSERT INTO user SET ?", userObj , function (err, res) {
//             if (err) {
//                 reject(err);
//                 return;
//             } else {
//                 resolve(res);
//             }
//         })  
//     })
// }
let create = factory.createFactory("user");


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
let update = async (uid, toUpdateObject) => {
    
    let updateString = '';
    for(let attr in toUpdateObject){
        updateString += `${attr} = "${toUpdateObject[attr]}", `;  // updateString = toUpdateObject[email] ki value new wali
    }
    updateString = updateString.substring(0, updateString.length - 2);
    console.log(updateString);
    return new Promise(function(resolve,reject) {
        connection.query(`UPDATE user SET ${updateString} WHERE uid = "${uid}"`, function(err, result){
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// delete
let deleteById = (uid) => {
    return new Promise(function (resolve,reject) {
        connection.query('DELETE FROM user WHERE uid = ?', uid, function(err,result){
            if(err){
                reject(err);
            } else{
                resolve(result);
            }
        });
    });
}

// send request
// receive request

module.exports = {
    create,
    getById,
    update,
    deleteById
};