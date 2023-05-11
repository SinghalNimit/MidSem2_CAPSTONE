const router = require('express').Router();
const user = require('../models/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// registered users 
router.post('/register', async(req,res) => {
    try {

        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.send({
                success: false,
                message: "User already exists!!!",
            })
        }
        
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        req.body.password = hashPassword;
        const newUser = new user(req.body);
        await newUser.save();
        res.send({
            message: "User created ",
            data: null,
            success: true,
        })
    } catch (error) {
        res.send({
            message: error.message,
            success: false,
        })
    }
});

// login user account 
router.post("/login", async(req,res)=>{
    try {
        let user = await User.findOne({email: req.body.email});
        if(!user){
            return res.send({
                success: false,
                message: "User does not exists!!!",
            });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.send({
                success: false,
                message: "Invalid Password",
            });
        }

        // generating token
        const token = jwt.sign({ userId: user._id}, process.env.jwt_secret, { expiresIn: "1d"}); 
        res.send({
            message: " Login Successfully",
            data: data,
            success: true,
        })
    } catch (error) {
        res.send({
            message: error.message,
            success: false,
        })
        
    }
});

module.exports = router;
