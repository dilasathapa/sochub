const express = require('express')
const cors = require('cors')
const connection = require('./db/connectDatabase')
const app = express();
app.use(cors());
app.use(express.json())


connection()
.then(()=>{
    app.listen(process.env.API_PORT, ()=>{
        console.log(`Server listening on http://localhost:${process.env.API_PORT}`)
    })
})