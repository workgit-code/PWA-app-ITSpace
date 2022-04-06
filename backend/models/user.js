const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    fuel: {
        type:Number,
        required:true
    },
    gems: {
        type: Number,
        required: true
    }
})


module.exports=mongoose.model('User',userSchema)