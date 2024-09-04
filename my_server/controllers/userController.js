import User from "../models/userModel.js"
export const getUsers=async(req, res)=>{
    try{
        const user=await User.find()
    res.status(200).json(user)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
    
}
export const getUserById=async(req, res)=>{
    try{
        const userById=await User.findById(req.params.id)
    res.status(200).json(userById)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
    
}

export const createUser=async(req, res)=>{
    const {name, email, phone}=req.body
    try{
        const user=new User({
            name,
            email,
            phone,
        })
        await user.save()
        res.status(201).json(user)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
    
}


export const updateUser = async(req,res)=>{
    const id=req.params.id
const {name, email, phone}=req.body
try{
const user = await User.findByIdAndUpdate(id,{
    name, 
    email,
    phone,
})
await user.save()
res.status(201).json(user)
}catch(err){
    res.status(202).json({message:err})
}
}

export const deleteUser = async(req,res)=>{
    const id=req.params.id
try{
const user = await User.findByIdAndDelete(id)
res.status(201).json(user)
}catch(err){
    res.status(202).json({message:err.message})
}
}
