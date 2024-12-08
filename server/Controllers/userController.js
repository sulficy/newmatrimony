const Users =require('../Models/userSchema')
const jwt = require('jsonwebtoken')

// Register logic
exports.register = async (req, res) => {
    const { username, email, password,role } = req.body;
    try {
        const userDetails = await Users.findOne({ email });
        if (userDetails) {
            console.log("User already exists");
            return res.status(409).json("User already exists.");


          }
           
            const newUser = new Users({ username, email, password, role });
           
            await newUser.save();
            return res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json("Internal server error");
    }
};

// Login logic
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userData = await Users.findOne({ email, password });
        if (userData) {
            const token = jwt.sign({ userId: userData._id }, process.env.jwtToken);
            res.status(200).json({ user: userData, token });
            
        } else {
            res.status(401).json("Invalid email or password");
            console.log("login broo");
            
        }
    } catch (error) {
        res.status(500).json("Internal server error");
    }
};

