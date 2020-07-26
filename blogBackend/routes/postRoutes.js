const router = require("express").Router();
const Post = require("../models/postModel.js")

//Retrival of data from the database
router.post("/",async (req,res) =>{

  const {title,createdAt,tags,html}= req.body;
// Creationm of Model
  const newPost = new Post ({
    title,createdAt,tags,html

  });
  // Saving data to the database
  try
  {
     const savedPost = await newPost.save();
    res.json(savedPost);
  }catch(err){
    console.error(err);
  }
});

router.get("/",async (req,res)=>{
  const posts = await Post.find();
  res.json(posts)
})

router.get("/:id",async (req,res)=>{
  const post = await Post.findById(req.params.id);
  res.json(post)
})



module.exports = router;
