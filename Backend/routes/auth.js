const router = require('express').Router()
const  User = require('../Model/User')
const CryptoJS = require('crypto-js')
// const jwt = require('jsonwebtoken')

// Register 

router.post('/register',async (req,res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC)
        .toString()
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)

    } catch (error) {
        res.status(500).json(error)
    }
} )

// Login 

router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        })
        // !user && res.status(401).json(" username Wrong credential")

        const hashedPassword = CryptoJS.AES.decrypt(
          user.password, process.env.PASS_SEC);
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if(!user) {
            return res.status(401).json("username Wrong")
        }else if(Originalpassword !== req.body.password){
            return res.status(401).json("Password Wrong Credential")
        }

        // const accessToken = jwt.sign({
        //     id: user._id,
        // },
        // process.env.JWT_SEC,
        // {expiresIn:"3d"}
        // );

        const {password, ...other} = user._doc;

        res.status(201).json({other})  
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router