import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import categoryRoutes from './routes/category.routes.js'
import prodRouter from './routes/product.route.js'
import supRouter from './routes/supplier.route.js'
dotenv.config();

const app = express();
app.use(express.json());

//route to categories
app.use('/api/categories',categoryRoutes);
//route to products
app.use('/api/products',prodRouter);
//route to use suppliers
app.use('/api/suppliers',supRouter);

const PORT = process.env.PORT||5000;
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri)
.then(()=>console.log("MONGODB Connected"))
.catch(e=>console.log("error",e));

app.get('/',(req,res)=>{
    res.send('API Running');
});

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});

