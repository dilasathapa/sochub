const jwt = require('jsonwebtoken')
const config = process.env;

const verifyToken = async(req, res)=>{
    let token = req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        return res.status(401).send("Invalid Token")
    }
    return next();
}

module.exports = verifyToken
