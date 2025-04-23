const { usersignup,userlogin } =require("../operations/UserOperations");

exports.signup=async(req,res)=>{
    try {
        const s1=await usersignup(req.body.name,req.body.email,req.body.password,req.body.role);
        res.status(200).json(s1)
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
   
}

exports.login=async(req,res)=>{
    try {
        console.log(req.body);
        const s2=await userlogin(req.body.email,req.body.password);
        res.status(200).json(s2);
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

