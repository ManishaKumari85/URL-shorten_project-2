const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const route=require("./route/route");
const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://sangamsuman323:XVZrnDNPfS8c21p8@cluster0.bolaw.mongodb.net/group36Database",{
    useNewUrlParser:true
})
.then(()=>console.log("MongooDB Connected"))
.catch((error)=>console.log(error))

app.use('/',route)

app.listen(5000|| process.env.PORT, function(){
    console.log("Express app running on Port "+(5000||process.env.PORT))
})












