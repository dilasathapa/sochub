const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser');
const connection = require('./db/connectDatabase');
const authRouter = require('./routes/auth.routes');
const getRouter = require('./routes/tokenSender.routes');
const postRouter = require('./routes/post.routes');
const app = express();
app.use(cors());
// app.use(express.json())
app.use(bodyParser.json({limit: '10mb'}));
app.use(express.json({limit: '10mb'}));



app.use('/', authRouter)
app.use('/', postRouter)

connection()
.then(()=>{
    app.listen(process.env.API_PORT, ()=>{
        console.log(`Server listening on http://localhost:${process.env.API_PORT}`)
    })
})