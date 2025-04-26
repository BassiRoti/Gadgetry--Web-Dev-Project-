const { getallproducts, createproduct, deleteProduct, updateProductStock } = require('../operations/ProductOperations');


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
      const { title, price, description, image, category, isFeatured, quantity, addedBy } = req.body;
      const newProduct = await createproduct(title, price, description, image, category, isFeatured, quantity, addedBy);
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  
  exports.deleteProduct = async (req, res) => {
    try {
      await deleteProduct(req.params.id);
      res.status(200).json({ msg: 'Product deleted successfully' });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };

  exports.updateProductStock = async (req, res) => {
    try {
      const updatedProduct = await updateProductStock(req.params.id, req.body.quantity);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
