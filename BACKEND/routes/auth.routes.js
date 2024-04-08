const express = require('express')
const User = require("../models/user.model")
const authRouter = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config();

authRouter.post('/user/register', verifytoken, async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("All inputs are required");
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

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY
        )
        user.token = token;

        res.status(201).json(user);
    } catch (error) {
        console.log(error)
    }
})
