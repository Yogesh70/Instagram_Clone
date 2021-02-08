const express = require('express');
// to create the router
const userRouter = new express.Router();

const { getAllUser, createUser, getUser, updateUser, deleteUser, checkBody, createRequest, getAllFollowers, getCountOfAllFollowers, acceptRequestHandler } = require('../Controller/userController');

userRouter.route('/').get(getAllUser).post(checkBody,createUser);
userRouter.route('/request').post(createRequest).patch(acceptRequestHandler);

userRouter.route('/request/:id').get(getAllFollowers);
userRouter.route('/request/count/:id').get(getCountOfAllFollowers);
userRouter.route('/:uid').get(getUser).patch(checkBody,updateUser).delete(deleteUser);

module.exports = userRouter;