const router = require("express").Router();

router.get("/test",function (req,res) {
res.send("its working")
})

module.exports =router;
