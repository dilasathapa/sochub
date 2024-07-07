const express = require('express')
const User = require('../models/user.model');
const verifyToken = require('../middleware/auth')
const userRouter = express.Router();
const Post = require("../models/Post.model")

userRouter.get('/posts/loggedinuser', verifyToken, async(req, res) =>{
    try {
        const userId = req.user.user_id;
        console.log(userId)

        const posts = await Post.find({ authorId: req.user.user_id }).populate('authorId', 'first_name').exec();
        // console.log(posts)
        res.status(200).json(posts);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
      
})

module.exports = userRouter