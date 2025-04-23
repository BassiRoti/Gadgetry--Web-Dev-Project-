const UserSchema=require('../models/User')

exports.usersignup=async(name,email,pass,role)=>{
    await UserSchema.create({name,email,password:pass,role});
}

exports.userlogin=async(email,pass)=>{
    await UserSchema.find({email,pass});
}

