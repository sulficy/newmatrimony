const jwt = require('jsonwebtoken')
const jwtMiddleware = (req,res,next) => {
    console.log('indise jwtMiddleware');
    try{
        console.log('inside try jwt');
        
        const token = req.headers['authorization'].slice(7)
        console.log(token);
        if(token){
            jwtVerification = jwt.verify(token,process.env.jwtToken)
            console.log(jwtVerification);
            req.payload = jwtVerification.userId
            next()
        }
        else 
        res.status(401).json('please provide token')     
    }
    catch(err){
        res.status(403).json('please login')
    }
}
module.exports = jwtMiddleware