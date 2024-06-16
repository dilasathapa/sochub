const nodemailer = require('nodemailer')
// const jwt = require('jsonwebtoken')

// const transporter = nodemailer.createTransport({
//     auth :{
//         user : process.env.USER_EMAIL,
//         pass : process.env.USER_CREDENTIAL
//     }
// })

// const token = jwt.sign({
//         data : 'Token Data'
//     }, process.env.TOKEN_KEY, { expiresIn : '10m'}
// )

// const mailConfiguration = {
//     from : process.env.USER_EMAIL,
//     to : 
// }


const express = require('express');
const jwt = require('jsonwebtoken');
const getRouter = express.Router();
const User = require('../models/user.model')

getRouter.get('/verify/:token/:email/:password', (req, res) => {
    const { token, email, password } = req.params;

    jwt.verify(token, process.env.RANDOM_TOKEN_KEY, async(req, res) => {
        if (err) {
            console.log(err)
            res.send("Email verification failed, possibly the link is invalid or expired");
        } else {
            encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                email: email.toLowerCase(),
                password: encryptedPassword
            })
            // generate token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY
            )
            user.token = token;
            res.status(201).send("Email verifified successfully"); 

        }
    })


})

module.exports = getRouter;
