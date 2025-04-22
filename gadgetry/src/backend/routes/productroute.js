const express=require('express')
const { getproduct,addproduct } =require('../controllers/productcontroller');
const router=express.Router();

router.get('/',getproduct);
router.post('/',addproduct);

module.exports=router;