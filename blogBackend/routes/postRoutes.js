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
router.post("/:id/update",function(req,res){
    const {title , createdAt, tags, html} = req.body;
    console.log(title);
    Post.findOneAndUpdateMany({_id:req.params.id},{title,createdAt,tags,html},(err,post)=>{
      if (err){
        console.log(err);
      }else{
        res.json(post)
      }
    });
    }
  )

router.get("/:id/update",async (req,res)=>{
  const update = await Post.findById(req.params.id);

  res.json(update)
})
module.exports = router;
