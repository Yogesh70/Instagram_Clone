const connection = require('./connection');

let addFollowing = (obj) => {
    return new Promise(function(resolve,reject){
        connection.query(`INSERT INTO user_following SET ?`, obj, (err,result) => {
            if(err){
                reject(err);
            } else{
                resolve(result);
            }
        })
    });
}

// let getAllFollowers = (uid) => {
//     return new Promise(function(resolve,reject) {
//         connection.query(`SELECT * FROM user_following WHERE user_id = "${uid}"`, (err,result) => {
//             if(err){
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         })
//     })
// }

// let getCountFollowers = (user_id) => {
//     return new Promise(function(resolve,reject) {
//         connection.query(`SELECT COUNT(*) AS followingCount FROM user_following WHERE user_id = "${user_id}" AND is_accepted=1`, (err,result) => {
//             if(err){
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         })
//     })
// }

module.exports = {
    addFollowing,
    // getAllFollowers,
    // getCountFollowers
};
