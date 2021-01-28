const connection = require('./connection');
// npm i nodemon --save-dev
// npm i uuid
const { v4: uuidv4 } = require('uuid');
// const userModel = {};
const util = require('util');
const { promises } = require('fs');

let addPendingFollower = (obj) => {
    return new Promise(function(resolve,reject){
        connection.query(`INSERT INTO user_follower SET ?`, obj, (err,result) => {
            if(err){
                reject(err);
            } else{
                resolve(result);
            }
        })
    });
}

let getAllFollowers = (uid) => {
    return new Promise(function(resolve,reject) {
        connection.query(`SELECT * FROM user_follower WHERE user_id = "${uid}"`, (err,result) => {
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

let acceptRequest = (user_id,follower_id) => {
    return new Promise(function(resolve,reject){
        connection.query(`UPDATE user_follower SET is_accepted = true WHERE user_id = "${user_id}" AND follower_id = "${follower_id}"`, (err, result) => {
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

let getCountFollowers = (user_id) => {
    return new Promise(function(resolve,reject) {
        connection.query(`SELECT COUNT(*) AS followersCount FROM user_follower WHERE user_id = "${user_id}" AND is_accepted=1`, (err,result) => {
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports = {
    addPendingFollower,
    getAllFollowers,
    acceptRequest,
    getCountFollowers
};
