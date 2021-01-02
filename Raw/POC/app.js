// api making framework
const express = require('express');
const app = express();
let userDB = require('./db/user.json');
const fs = require('fs');
const path = require('path');

// get, post, patch, delete => express methods

// app.get('/home', (req, res) => {
//     res.send("<h1>Hello from express</h1>");
//   });

// get All => admin
// get => particular a user
// post => create a user
// update => update a user
// delete => a user

// https://www.youtube.com/channel
// protocol// web.hostname.subdomain/route

// post => user => name,password,handle,image_url,bio,email,uid

// user defined middleware
app.use(function before(req,res,next){
    console.log('I will run before express.json');
    console.log(req.body);
    next();  // would lead to the next middleware
})

// for accepting data in req.body 
// it will always run 
// it tracks json obj in http body and add it to req.body
// user defined middleware
app.use(express.json());
app.post(function checkBody(req,res,next){
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
})

// npm i nodemon --save-dev
// npm i uuid
const { v4: uuidv4 } = require('uuid');

// -------------------------------USER--------------------------------------------- 

const getAllUser = (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        userDB: userDB
    })
}

const getUser = (req, res) => { 
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

const createUser = (req, res) => { 
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

app.route('/api/v1/user').get(getAllUser).post(createUser);
app.route('/api/v1/user/:uid').get(getUser).patch(updateUser).delete(deleteUser);

// // get all userDB 
// app.get('api/v1/user', getAllUser);

// // create
// app.post('api/v1/user', createUser);

// // get one => some changing parameters
// app.get('api/v1/user/:uid', getUser);

// // patch / update user => key search
// app.patch('api/v1/user/:uid', updateUser);

// // delete user
// app.delete('api/v1/user/:uid', deleteUser);


// ----------------------------------POST----------------------------------------------------------------

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

app.route('/api/v1/post').get(getAllPost).post(createPost);
app.route('/api/v1/post/:uid').get(getPost).patch(updatePost).delete(deletePost);

// // get all Posts
// app.get('api/v1/post', getAllPost);

// // create
// app.post('api/v1/post', createPost);

// // get one => some changing parametdsers
// app.get('api/v1/post/:uid', getPost);

// // patch / update post => key search
// app.patch('api/v1/post/:uid', updatePost);

// // delete post
// app.delete('api/v1/post/:uid', deletePost);

// 404 route
// if any of the routes doesn't match 
app.use('*', (req,res) => {
    res.status(404).json({
        "status": "failure",
        "message": "resource not found"
    })
})

function getUserById(cUid){

  let userArr = userDB.filter((user) => {
      return user.uid == cUid;
  });
  return userArr[0];
}

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
