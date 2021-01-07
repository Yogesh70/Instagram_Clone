// npm i nodemon --save-dev
// npm i uuid
// const { v4: uuidv4 } = require('uuid');
// const userDB = require('../Model/user.json');
const fs = require('fs');
const path = require('path');

// Model
const userModel = require('../Model/userModel');
const user_followerModel = require('../Model/user_followerModel');


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

const updateUser = async (req, res) => {
    // let user = getUserById(req.params.uid);
    let uid = req.params.uid;  
    let toBeUpdatedObj = req.body;
    try{
        let result = await userModel.update(uid,toBeUpdatedObj);
        res.status(200).json({
            status: "success",
            "message": result
        })
    } catch(err){
        res.status(500).json({
            status: "failure",
            "message": err.message
        })
    }
  // user , obj
  // user.something <- key literal search for key with same name
    //   for(let key in user){
    //       console.log(key);
    //       user[key] = toBeUpdated[key];
    //   }
    //   fs.writeFileSync(path.join(__dirname,'./db/user.json'), JSON.stringify(userDB));
  }

const deleteUser = async(req, res) => {
    let cid = req.params.uid;
    try {
        let result = await userModel.deleteById(cid);
        res.status(200).json({
            status: "success",
            "message": result
        })
    } catch(err){
        res.status(500).json({
            status: "failure",
            "message": err.message
        })
    }
    // console.log(userDB.length);
    // userDB = userDB.filter((user) => {
    //     return user.uid != cid;
    // })
    
    // fs.writeFileSync(path.join(__dirname,'./db/user.json'), JSON.stringify(userDB)); 
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

// ********************************* REQUEST ************************************
// Send Request
let createRequest = async(req, res) => {
    let user = req.body;
    let user_id = req.body.user_id;
    let follower_id = req.body.follower_id;
    try{
        await user_followerModel.addPendingFollower(user);

        let { is_public } = await userModel.getById(user_id);
        if(is_public == true){
            await user_followerModel.acceptRequest(user_id,follower_id);
            return res.status(201).json({
                status: "success",
                "message": "request accepted"
            })
        } 
        
        res.status(201).json({
            status: "pending",
            "message": "request Sent user will accept it"
        })
    } catch(err){
        console.log(err);
        res.status(500).json({
            status: "failure",
            "message": err.message
        })
    }
}

// Get All Followers 
let getAllFollowers = async(req, res) => {
    let cUid = req.params.id;
    try{
        let result = await user_followerModel.getAllFollowers(cUid);
        res.status(201).json({
            status: "success",
            "message": result
        })
    } catch(err){
        console.log(err);
        res.status(500).json({
            status: "failure",
            "message": err.message
        })
    }
}

  module.exports = {
      getUser,
      getAllUser,
      createUser,
      updateUser,
      deleteUser,
      checkBody,
      createRequest,
      getAllFollowers
  };
  