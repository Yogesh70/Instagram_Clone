// Write the common function Create Get Update Delete
const connection = require('./connection');
const { v4: uuidv4 } = require('uuid');

// Factory for userModel and postModel
module.exports.createFactory = function(entity){
    return (entityObj) => {
            // creating uniqueId 
            entityObj.id = uuidv4();
            // create user
            return new Promise(function(resolve, reject) {
                connection.query(`INSERT INTO ${entity} SET ?`, entityObj , function (err, res) {
                    if (err) {
                        reject(err);
                        return;
                    } else {
                        resolve(res);
                    }
                })  
            })
        }
}

module.exports.getByIdFactory = function(entity){
    return (id) => {
        return new Promise(function(resolve, reject) {
            connection.query(`SELECT * from ${entity} WHERE id= "${id}"`, function (err, res) {
                if (err) {
                    reject(err);
                    return;
                } else {
                    resolve(res[0]);
                }
            })  
        })
    }
}

module.exports.updateFactory = function(entity){
    return async (id, toUpdateObject) => {
    
        let updateString = '';
        for(let attr in toUpdateObject){
            updateString += `${attr} = "${toUpdateObject[attr]}", `;  // updateString = toUpdateObject[email] ki value new wali
        }
        updateString = updateString.substring(0, updateString.length - 2);
        console.log(updateString);
        return new Promise(function(resolve,reject) {
            connection.query(`UPDATE ${entity} SET ${updateString} WHERE id = "${id}"`, function(err, result){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

module.exports.deleteFactory = function(entity){
    return (id) => {
        return new Promise(function (resolve,reject) {
            connection.query(`DELETE FROM ${entity} WHERE id = ?`, id, function(err,result){
                if(err){
                    reject(err);
                } else{
                    resolve(result);
                }
            });
        });
    }
}