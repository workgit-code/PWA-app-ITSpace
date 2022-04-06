const express=require('express')
const router=express.Router()
const User=require('../models/user')



async function getUser(req, res, next){
    let user
  try{
    user=await User.findById(req.params.id)
   if(user == null){
       return res.status(404).json({message: 'Cannot find user'})
   }
  }
  catch(err){
     return res.status(500).json({message: err.message})
  }

  res.user=user
  next()
}


//Get all users
router.get('/', async(req,res)=>{
    try{
        const users=await User.find()
        res.send(users)
    }catch(err){
        res.status(500).json({message: err.message})
    }
 })

 //get one user by id
 router.get('/:id', getUser, (req,res)=>{
    res.send(res.user.username)
 })

module.exports=router