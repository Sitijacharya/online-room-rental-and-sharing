const formModel = require("../models/hostelform");
const roommateformModel = require("../models/roommateform");
const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const { upload } = require("./upload");


//POST HOSTEL FORM
router.post("/addform", async ( req , res ) => {
  const newform = new formModel(req.body);

  try{
    const form = await newform.save();
    // console.log(form);
    res.status(201).json(form);
  } catch (error) {
    return res.status(500).json(error);
  }
}); 

//Image Upload
router.post("/imageupload", upload.array('image',2) , async ( req , res ) => {
  const newProperty = new formModel(req.body);  
  
  const semiimages = [req.files[0].filename]
  
  if(req.files[1] != undefined)
   {

    semiimages.push(req.files[1].filename);
   } 
  const images = semiimages
  console.log(semiimages)
  console.log(images)
  res.send(images)
}); 
 
//POST ROOMATE FORM
router.post("/addroommateform", async ( req , res ) => {
  const newform = new roommateformModel(req.body);

  try{
    const form = await newform.save();
    // console.log(form);
    res.status(201).json(form);
  } catch (error) {
    return res.status(500).json(error);
  }
}); 

//Image Upload
router.post("/roommateimageupload", upload.array('image',3) , async ( req , res ) => {
  const newProperty = new formModel(req.body);  
  
  const semiimages = [req.files[0].filename]
  
  if(req.files[1] != undefined)
   {
    semiimages.push(req.files[1].filename);
    semiimages.push(req.files[2].filename);
   } 
  const images = semiimages
  console.log(semiimages)
  console.log(images)
  res.send(images)
}); 
 

//GET FORM
router.get("/find/:id" , async (req,res) => {
  try {
    const form = (await roommateformModel.findById(req.params.id))._doc;
    res.status(200).json(form);
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET ALL FORM
router.get("/", async (req,res) => {
  try {
    const form = await roommateformModel.find().sort({createdAt: -1}).limit(10);
    res.status(200).json(form);
  } catch {

  }
});

//DELETE FORM
router.delete("/:id",verifyTokenAndAuthorization , async (req,res) => {
  try {
    await formModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!!!");
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;

