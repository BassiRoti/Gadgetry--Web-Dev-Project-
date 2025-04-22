const mongoose=require('mongoose');
const express=require('express');
const cors=require('cors')

const authr=require('../routes/userrouter')
const pr=require('../routes/productroute')
const app=express();
app.use(cors());
app.use(express.json());

app.use('/auth',authr);
app.use('/products',pr);
const connect_db=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/gadgetrydb");
        console.log("database connected")
        app.listen(3000, () => console.log(`Server running on port 3000`));
    } catch (error) {
        console.log(`error ${error}`)
    }
}

connect_db();

module.exports=connect_db;