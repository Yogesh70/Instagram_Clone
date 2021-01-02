// npm i nodemon --save-dev
// npm i uuid
const { v4: uuidv4 } = require('uuid');
const userDB = require('../Model/post.json');
const fs = require('fs');
const path = require('path');

const getAllPost = (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        userDB: userDB
    })
}

const getPost = (req, res) => { 
    // req parameters -> user id
  let cUid = req.params.uid;
    let userArr = userDB.filter((user) => {
          return user.uid == cUid;
    })
    console.log(req.params);
  res.status(201).json({
      status: "success",
      user: userArr.length == 0 ? "no user" : userArr[0]
  })
//   next();
}

const createPost = (req, res) => { 
    let user = req.body;
    // console.log(user);
    // creating uniqueId before pushing
    user.uid = uuidv4();
    userDB.push(user);
    // saved to db folder in disk
    fs.writeFileSync('./db/user.json', JSON.stringify(userDB));
    // res
    // res.status(201).json({
        // status: "success",
        // res: "User Created",
        // user: req.body
    // })
}

const updatePost = (req, res) => {
    let user = getPostById(req.params.uid);  
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

const deletePost = (req, res) => {
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

function getPostById(cUid){

    let userArr = userDB.filter((user) => {
        return user.uid == cUid;
    });
    return userArr[0];
  }  

module.exports = {
    getAllPost,
    getPost,
    createPost,
    updatePost,
    deletePost
};
