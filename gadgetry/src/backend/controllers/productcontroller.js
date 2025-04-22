const {getallproducts,createproduct}=require('../operations/ProductOperations');

exports.getproduct=async(req,res)=>{
    try {
        const p=await getallproducts();
        res.status(200).json(p);
        // res.send("done");
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

exports.addproduct=async(req,res)=>{
    try {
        const p2=await createproduct(req.body.title,req.body.price,req.body.desc,req.body.img,req.body.category,req.body.isFeatured)
        res.status(200).json(p2);
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}
