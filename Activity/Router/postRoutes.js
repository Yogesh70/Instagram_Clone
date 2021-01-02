const express = require('express');
// to create the router 
const postRouter = new express.Router();

const {getAllPost, getPost, updatePost, deletePost, createPost} = require('../Controller/postController');
postRouter.route('/').get(getAllPost).post(createPost);
postRouter.route('/:uid').get(getPost).patch(updatePost).delete(deletePost);

module.exports = postRouter;