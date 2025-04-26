const ProductSchema=require('../models/Product');

exports.getallproducts=async()=>{
    return await ProductSchema.find();
}

exports.createproduct=async(title,price,description,image,category,isFeatured,quantity,addedBy)=>{
    return await ProductSchema.create({title,price,description,image,category,isFeatured,quantity,addedBy});
}

exports.deleteProduct = async (id) => {
    return await ProductSchema.findByIdAndDelete(id);
  };
  

  exports.updateProductStock = async (id, quantity) => {
    return await ProductSchema.findByIdAndUpdate(id, { quantity }, { new: true });
  };