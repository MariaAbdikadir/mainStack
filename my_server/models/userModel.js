import mongoose from 'mongoose'

const {Schema, model}=mongoose

const userSchema=Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone :{
        type:String,
        required:true
    }
})

const User=model('user',userSchema)

export default User
