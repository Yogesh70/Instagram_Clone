// api making framework
const express = require('express');
const app = express();
// let userDB = require('./db/user.json');
// const fs = require('fs');
// const path = require('path');

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
    
    app.use(express.static("public"));

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
    
    // localhost:3000/api/v1/user/:uid
    
    // -------------------------------USER--------------------------------------------- 
    
    const userRouter = require('./Router/userRoutes');    
    
    // Router
    // /api/v1/user/:uid => userRouter
    app.use('/api/v1/user', userRouter);
    
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
    
    const postRouter = require('./Router/postRoutes');

    // Router
    // /api/v1/post/:uid => postRouter
    app.use('/api/v1/post', postRouter);
    
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

app.listen(4000, () => {
    console.log("Server started at port 4000");
});
