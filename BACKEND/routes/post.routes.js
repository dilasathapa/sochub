const express = require('express')
const postRouter = express.Router()
const Post = require("./../models/Post.model")
const verifyToken = require("../middleware/auth")

postRouter.post('/addposts', verifyToken, async (req, res) => {

    try {
        let { content, postimage } = req.body;

        const author = req.user.user_id
        const post = await Post.create({
            content,
            postimage,
            authorId: author
        })
        res.status(201).json(post);

    } catch (err) {
        console.log("err", err);

        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})

module.exports = postRouter