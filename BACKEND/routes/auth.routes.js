const express = require('express')
const User = require("../models/user.model")
const authRouter = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// var kickbox = require('kickbox').client('live_f3036c3079e61c6fdb25aa83bf4426128043982877678cbcc4863596169d609f').kickbox();
const emailValidator = require('deep-email-validator');
const nodemailer = require('nodemailer')

async function isEmailValid(email) {
    return emailValidator.validate(email)
}

require('dotenv').config();

authRouter.post('/user/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("All inputs are required");
        }


        // const { valid, reason, validators } = await isEmailValid(email);

        // if (valid) {
        //     return res.send({ message: "OK" })
        // } 
        // if (!valid) {
        //     return res.status(400).send({
        //         message: "Please provide a valid email address.",
        //         reason: validators[reason].reason
        //     })
        // }

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User already exists. Continue Login");
        }

        // transporter nodemailer
        // const transporter = nodemailer.createTransport({
        //     host: process.env.SMPT_HOST,
        //     port: process.env.SMPT_PORT,
        //     secure: true,
        //     service: 'gmail', 
        //     auth: {
        //         user: 'process.env.USER_EMAIL',
        //         pass: 'process.env.USER_CREDENTIAL'
        //     },
        //     authMethod: 'LOGIN',
        // })
        // const tokentopass = jwt.sign({
        //     data: 'Token Data'
        // }, process.env.RANDOM_TOKEN_KEY, { expiresIn: '10m' }
        // )

        // const mailConfiguration = {
        //     from: 'process.env.USER_EMAIL',
        //     to: email,
        //     subject: 'Email Verification',
        //     text: `Hi! There, You have recently visited  
        //     our website and entered your email. 
        //     Please follow the given link to verify your email 
        //     http://localhost:${process.env.API_PORT}/verify/${tokentopass}/${email}/${password}
        //     Thanks`
        // }
        // transporter.sendMail(mailConfiguration, function (error, info) {
        //     console.log(process.env.USER_EMAIL, process.env.USER_CREDENTIAL)
        //     if (error){
        //         console.log(error)
        //     }else {

        //         console.log('Email Sent Successfully');
        //         console.log(info);
        //     }
        // });
        // 
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

        res.status(201).json(user);
    } catch (error) {
        console.log("error", error)
        return res.status(401).send("data not submitted")
    }
})

authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                // {
                //     expiresIn: "2h",
                // }
            );
            // save user token
            user.token = token;

            res.status(200).json(user);

        } else {
            res.status(400).send("Invalid Credentials");

        }
    } catch (err) {
        console.log(err);
    }

});


module.exports = authRouter
