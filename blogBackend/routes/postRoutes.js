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
////////////////////Reading the date///////////////////////////////////////////////////
router.get("/",async (req,res)=>{
  const posts = await Post.find();
  res.json(posts)
})
router.route("/:id")
///////////////////////Reading Specific Data//////////////////////////////////////////
.get(async (req,res)=>{
  const post = await Post.findById(req.params.id);
  res.json(post)
})
///////////////////////Deleting Specific Data//////////////////////////////////////////
.delete( async (req, res) => {
   Post.deleteOne({_id:req.params.id},(err)=>{
    if (err) {res.status(404).send("No item found")}
    else {res.status(200).send()}})
  })
///////////////////////Updating Specific Data//////////////////////////////////////////
.patch(function(req,res){

    Post.updateMany({_id:req.params.id},{$set:req.body},(err,post)=>{
      if (err){
        console.log(err);
      }else{
        res.json(post)
      }
    })
    }
  )
;

module.exports = router;
