const mongoose = require('mongoose');
require("dotenv").config();


async function connectDatabase(){
    try {
        // console.log(process.env.CONNECTION_URL)
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log('connected to database')
    } catch (error) {
        console.log(error)
        console.error('Could not connect to the database')
    }
}

module.exports = connectDatabase;