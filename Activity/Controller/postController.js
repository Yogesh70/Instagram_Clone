// npm i nodemon --save-dev
// npm i uuid
const { v4: uuidv4 } = require('uuid');
const postModel = require('../Model/postModel');

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
    let userArr = postModel.filter((user) => {
          return user.uid == cUid;
    })
    console.log(req.params);
  res.status(201).json({
      status: "success",
      user: userArr.length == 0 ? "no user" : userArr[0]
  })
//   next();
}

// const createPost = (req, res) => { 
//     let user = req.body;
//     // console.log(user);
//     // creating uniqueId before pushing
//     user.uid = uuidv4();
//     userDB.push(user);
//     // saved to db folder in disk
//     fs.writeFileSync('./db/user.json', JSON.stringify(userDB));
//     // res
//     // res.status(201).json({
//         // status: "success",
//         // res: "User Created",
//         // user: req.body
//     // })
// }

const createPost = async (req, res) => { 
    let post = req.body;
    // console.log(user);
    
    try{
        const date = new Date(); 
        post.created_at = date.toISOString().slice(0, 19).replace('T', ' ');
        let nDBPost = await postModel.create(post);
        // res
        res.status(201).json({
            status: "success",
            res: "User Created",
            post: nDBPost
        })
    } catch(err) {
        res.status(500).json({
            status: "failure",
            "message": err.message
        })
    }
}

const updatePost = async (req, res) => {
    // let user = getUserById(req.params.uid);
    let id = req.params.id;  
    let toBeUpdatedObj = req.body;
    try{
        let result = await postModel.update(id,toBeUpdatedObj);
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
}    

const deletePost = async(req, res) => {
    let cid = req.params.uid;
    try {
        let result = await postModel.deleteById(cid);
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
}

module.exports = {
    getAllPost,
    getPost,
    createPost,
    updatePost,
    deletePost
};
