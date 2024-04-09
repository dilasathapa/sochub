const express = require('express')
const User = require("../models/user.model")
const authRouter = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// var kickbox = require('kickbox').client('live_f3036c3079e61c6fdb25aa83bf4426128043982877678cbcc4863596169d609f').kickbox();
const emailValidator = require('deep-email-validator');

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

        const { valid, reason, validators } = await isEmailValid(email);

        // if (valid) {
        //     return res.send({ message: "OK" })
        // } 
        if(!valid) {
            return res.status(400).send({
                message: "Please provide a valid email address.",
                reason: validators[reason].reason
            })
        }

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User already exists. Continue Login");
        }

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


module.exports = authRouter
