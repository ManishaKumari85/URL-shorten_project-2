const express=require("express");
const router=express()
const {shortUrl,getUrl}=require("../controller/urlController")


router.post("/url/shorten",shortUrl)
router.get("/:urlCode",getUrl)
router.all("/**", function (req, res) {    
  res.status(404).send({status: false,msg: "no such api found"}) 
})


module.exports=router