const express=require('express')
const { getproduct,addproduct, deleteProduct, updateProductStock } =require('../controllers/productcontroller');
const router=express.Router();

router.get('/',getproduct);
router.post('/',addproduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProductStock);

module.exports=router;

