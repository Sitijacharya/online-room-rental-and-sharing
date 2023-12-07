const userModel = require("../models/user");
const Token = require("../models/token");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();


//UPDATE
router.put("/:id",  async (req,res) => {
  if(req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
  }

  try { 
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      }, 
      {new: true}
    );
    res.status(200).json(updatedUser);
  } catch(err) { 
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id",verifyTokenAndAuthorization , async (req,res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!!!");
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id" , async (req,res) => {
  try {
    const user = await userModel.findById(req.params.id);
    console.log('its in')
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
router.get("/",verifyTokenAndAdmin , async (req,res) => {
  const query = req.query.new;

  try {
    const users = query ? await userModel.find().sort({_id: -1}).limit(5) : await userModel.find();
    res.status(200).json(users);
  } catch(err) {
    res.status(500).json(err);
  }
});

//UPDATE VERIFICATION
router.get("/:id/verify/:token",async(req,res) => {
  try{
    console.log('its in ');
    const user = await userModel.findOne({_id: req.params.id});
    if(!user) return res.status(400).send({message: "Invalid Link"});

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token
    });
    if(!token) return res.status(400).send({message: "Invalid Link"});
    
    await userModel.findByIdAndUpdate(
      user._id,
      {
        verified: true,
      }
    );
    await token.remove();

    res.status(200).send({message: "Email Verified Successfully!!!"});
  }
  catch(err){
    res.status(500).send({message: "Internal Server Error"});
  }
})

//UPDATE WISHLIST
router.put("/wishlist/:id",  async (req,res) => {
  console.log('its in')
  console.log(req.body.id)
  try { 
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $push : {wishlist : req.body.id},
      }, 
      {new: true}
    );
    res.status(200).json(updatedUser);
  } catch(err) { 
    res.status(500).json(err);
  }
});

//UPDATE BOOKING
router.put("/booking/:id",  async (req,res) => {
  console.log('its in')
  console.log(req.body.id)
  try { 
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $push : {currentbooking : req.body.id},
      }, 
      {new: true}
    );
    res.status(200).json(updatedUser);
  } catch(err) { 
    res.status(500).json(err);
  }
});

//DELETE WISHLIST
router.put("/deletewishlist/:id" , async (req,res) => {
  console.log(req.body.id)
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull : {wishlist : req.body.id},
      },
      {new: true}
    );
    res.status(200).json(updatedUser);
  } catch(err) { 
    res.status(500).json(err);
  }
});

module.exports = router;