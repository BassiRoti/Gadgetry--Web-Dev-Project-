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

exports.addproduct = async (req, res) => {
    try {
      const { title, price, description, image, category, isFeatured, quantity } = req.body;
      const newProduct = await createproduct(title, price, description, image, category, isFeatured, quantity);
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  
