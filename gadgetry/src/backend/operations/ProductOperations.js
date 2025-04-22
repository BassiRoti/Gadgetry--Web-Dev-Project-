const ProductSchema=require('../models/Product');

exports.getallproducts=async()=>{
    return await ProductSchema.find();
}

exports.createproduct=async(title,price,desc,img,category,isFeatured)=>{
    return await ProductSchema.create({title,price,desc,img,category,isFeatured});
}
