const mongoose=require('mongoose');

const product_schema=new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},
    image: { type: String, required: true },
    category: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    quantity: { type: Number, default: 1 },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports=mongoose.model('ProductSchema',product_schema,'products')