const express = require('express');
// to create the router
const userRouter = new express.Router();

const { getAllUser, createUser, getUser, updateUser, deleteUser, checkBody, createRequest, getAllFollowers } = require('../Controller/userController');
userRouter.route('/').get(getAllUser).post(checkBody,createUser);
userRouter.route('/request').post(createRequest);

userRouter.route('/request/:id').get(getAllFollowers);
userRouter.route('/:uid').get(getUser).patch(checkBody,updateUser).delete(deleteUser);

module.exports = userRouter;