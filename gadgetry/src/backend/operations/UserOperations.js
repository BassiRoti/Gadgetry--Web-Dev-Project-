const UserSchema=require('../models/User')

exports.usersignup=async(name,email,password,role)=>{
    const u=await UserSchema.create({name,email,password,role});
    if(!u){
        throw new Error("Invalid credentials");
    }
    console.log("Created User:", u);

    return u
}

exports.userlogin=async(email,password)=>{
    console.log("Trying to find:", email, password);
  const user = await UserSchema.findOne({ email, password });
  console.log(await UserSchema.find())
  if (!user) {
    throw new Error("Invalid credentials");
  }

  return user;
}
