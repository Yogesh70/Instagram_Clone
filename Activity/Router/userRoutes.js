const express = require('express');
// to create the router
const userRouter = new express.Router();

const { getAllUser, createUser, getUser, updateUser, deleteUser, checkBody } = require('../Controller/userController');
userRouter.route('/').get(getAllUser).post(checkBody,createUser);
userRouter.route('/:uid').get(getUser).patch(checkBody,updateUser).delete(deleteUser);

module.exports = userRouter;