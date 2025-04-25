const ProductSchema=require('../models/Product');

exports.getallproducts=async()=>{
    return await ProductSchema.find();
}

exports.createproduct=async(title,price,description,image,category,isFeatured,quantity)=>{
    return await ProductSchema.create({title,price,description,image,category,isFeatured,quantity});
}
