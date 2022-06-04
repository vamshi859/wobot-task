const mongoose=require('mongoose')
// var mongoDBURL='mongodb+srv://Sai_12345:Sai_12345@cluster0.ucdww.mongodb.net/userdatabase'
var mongoDBURL = 'mongodb+srv://vamshi:vamshi@cluster0.q5u15.mongodb.net/test';
mongoose.connect(mongoDBURL,{useUnifiedTopology:true,useNewUrlParser:true})
var dbconnect=mongoose.connection
dbconnect.on('error',()=>{
    console.log('failed')
})
dbconnect.on('connected',()=>{
    console.log('success')
})
module.exports=mongoose