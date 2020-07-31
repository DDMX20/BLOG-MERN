const router = require("express").Router();
const bodyParser= require('body-parser')
const Post = require("../models/postModel.js")


//Retrival of data from the database
router.post("/",async (req,res) =>{
  const {title,createdAt,tags,html}= req.body;
// Creationm of Model
  const newPost = new Post ({title,createdAt,tags,html});
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

router.delete('/:id/delete', async (req, res) => {
  try {
    const data = await Post.findByIdAndDelete(req.params.id)
    if (!data) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router;
