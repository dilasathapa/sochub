const express = require('express')
const postRouter = express.Router()

// postRouter.post('/addposts', verifyToken, async (req, res) => {
postRouter.post('/addposts', async (req, res) => {

    try {
        let { content, postimage } = req.body;
        console.log("userid", req.user)

        const author = req.user.user_id
        const post = await Post.create({
            content,
            postimage,
            authorId: author
        })
        res.status(201).json(post);

    } catch (err) {
        console.error(err);

        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})

module.exports = postRouter