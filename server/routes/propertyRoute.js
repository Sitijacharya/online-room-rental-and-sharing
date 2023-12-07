const express = require("express");
const router = express.Router();
const Property = require("../models/property");
const { verifyTokenAndAdmin } = require("./verifyToken");
const { upload } = require("./upload");

//CREATE
router.post("/propertyadd",  async ( req , res ) => {
  const newProperty = new Property(req.body);  
  // newProperty.img = req.body.image
  console.log(newProperty.img)
  try{
    const property = await newProperty.save();
    res.status(200).json(property);
   
  } catch (error) {
    return res.status(500).json(error);
  }
}); 

//IMAGE UPLOAD
router.post("/imageupload", upload.array('image',3) , async ( req , res ) => {
  const newProperty = new Property(req.body);  
  const semiimages = [req.files[0].filename,req.files[1].filename,req.files[2].filename]
  const images = semiimages
  console.log(semiimages)
  console.log(images)
  res.send(images)
}); 

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async(req,res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProperty);
  } catch(err) {
    res.status(500).json.apply(err);
  }
})

//DELETE
router.delete("/:id",  async (req,res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Property has been deleted!!!");
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET PROPERTY
router.get("/find/:id", async(req,res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET ALL PROPERTY
router.get("/", async (req,res) => {
  const qNew = req.query.new
  const qCategory = req.query.category
  const qid = req.query.id
  
  try {
    let properties;
    
    if(qNew) {
      properties = await Property.find().sort({createdAt: -1}).limit(5)
    } else if(qCategory) {
      properties = await Property.find({category: {
        $in: [qCategory],
      },
    });
    } 
    else if(qid) {
      properties = await Property.find({userId: {
        $in: [qid],
      },
    });
    } 
    else {
      properties = await Property.find();
    }
    res.status(200).json(properties);
  } catch {

  }
});

//SEARCH
router.get("/search", async (req,res) => {
  let properties = await Property.find()
  res.json(properties)
})

//UPDATE BOOKING
router.put("/booking/:id",  async (req,res) => {
  console.log('property booking in')
  console.log(req.body._id)
  console.log(req.params.id)
  try { 
    const updatedUser = await Property.findByIdAndUpdate(
      req.params.id,
      {
        $push : {currentbookings : req.body._id},
      }, 
      {new: true}
    );
    res.status(200).json(updatedUser);
  } catch(err) { 
    res.status(500).json(err);
  }
});

module.exports = router;