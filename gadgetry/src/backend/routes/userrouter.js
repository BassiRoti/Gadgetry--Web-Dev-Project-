const express=require('express')
const { signup,login } =require('../controllers/authcontroller');
const router=express.Router();

router.post('/login',login);
router.post('/SignUp',signup);


module.exports=router;