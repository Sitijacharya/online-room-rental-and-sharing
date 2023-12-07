const express = require('express');
const router = express.Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const Token = require("../models/token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//REGISTER
router.post("/register", async ( req , res ) => {
  console.log(2)
  const newuser = new User(req.body);
  newuser.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();

  try{
    console.log(3)
    const user = await newuser.save();
    console.log(3.3)
    const token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex")
    }).save();
  console.log(4)
    const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
    await sendEmail(user.email,"Verify Email",url); 

    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}); 
 
//LOGIN
router.post("/login", async ( req, res ) => {
  try {

    const user = await User.findOne({username: req.body.username});
    !user && res.status(401).json("Wrong Credentials!");

    if(!user.verified) {
      let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex"),
				}).save();
				const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);
			}

			return res
				.status(400)
				.send({ message: "An Email sent to your account please verify" });
    }

    const hashedPassword = CryptoJS.AES.decrypt( user.password, process.env.PASS_SEC);
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    OriginalPassword !== req.body.password && res.status(401).json("Wrong Credentials!");

    const accessToken = jwt.sign({
      id: user._id, isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
      );
    
    const {password, ...others} = user._doc;
    res.status(200).json({...others,accessToken}); 

   
  } catch(error) {
    console.log('b')
    return res.status(500).json({error});
  }
});


module.exports = router;