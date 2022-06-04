const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    firstName: {
        type:String,
        require:true
    },
    lastName: {
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    conformpassword:{
        type:String,
        require:true
    }
})
const UserData=mongoose.model('User',userSchema)
module.exports=UserData