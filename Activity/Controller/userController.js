// npm i nodemon --save-dev
// npm i uuid
// const { v4: uuidv4 } = require('uuid');
// const userDB = require('../Model/user.json');
const fs = require('fs');
const path = require('path');

// Model
const userModel = require('../Model/userModel');


const getAllUser = (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        userDB: userDB
    })
}

const getUser = async (req, res) => { 
    // req parameters -> user id
  let cUid = req.params.uid;

    try{
        let user = await userModel.getById(cUid);
        res.status(201).json({
            status: "success",
            user: user
        })
    } catch(err) {
        res.status(500).json({
            status: "failure",
            "message": err.message
        })
    }
//   next();
}

const createUser = async (req, res) => { 
    let user = req.body;
    // console.log(user);
    
    try{
        let nDBUser = await userModel.create(user);
        // res
        res.status(201).json({
            status: "success",
            res: "User Created",
            user: nDBUser
        })
    } catch(err) {
        res.status(500).json({
            status: "failure",
            "message": err.message
        })
    }
}

const updateUser = (req, res) => {
    let user = getUserById(req.params.uid);  
    let toBeUpdated = req.body;
  // user , obj
  // user.something <- key literal search for key with same name
      for(let key in user){
          console.log(key);
          user[key] = toBeUpdated[key];
      }
      fs.writeFileSync(path.join(__dirname,'./db/user.json'), JSON.stringify(userDB)); 
      res.status(200).json({
          status: "success",
          user: user
      })
  }

const deleteUser = (req, res) => {
    let cid = req.params.uid;
    console.log(userDB.length);
    userDB = userDB.filter((user) => {
        return user.uid != cid;
    })
    
    fs.writeFileSync(path.join(__dirname,'./db/user.json'), JSON.stringify(userDB)); 
    res.status(200).json({
      status: "success",
      userDB,
      length: userDB.length 
    })
}

function getUserById(cUid){

    let userArr = userDB.filter((user) => {
        return user.uid == cUid;
    });
    return userArr[0];
  }  

let checkBody = function (req,res,next){
    // console.log('I will run after express.json');
    let keysArray = Object.keys(req.body);
    if(keysArray.length <= 0){
        res.status(200).json({
            "status": "failure",
            "message": "Body could not be empty"
        })
    } else{
        next();
    }
}

  module.exports = {
      getUser,
      getAllUser,
      createUser,
      updateUser,
      deleteUser,
      checkBody
  };
  