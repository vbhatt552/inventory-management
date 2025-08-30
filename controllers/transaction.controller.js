import Product from "../models/product.model.js";
import Transaction from "../models/transaction.model.js";


//creating transaction
export const createTran = async(req,res)=>{
    try{
const{productId,type,quantity} = req.body;
const product = await Product.findById(productId);
if(!product){
  return  res.status(404).json({message:"Product doesnt exists"})
}


if(type==='IN'){
    product.stock+=quantity;
}else if(type==='OUT'){
    if(product.stock<quantity) return res.status(400).json({message:"Insufficient stock"});
    product.stock-=quantity;
}
await product.save();

const transaction = new Transaction({productId,type,quantity});
await transaction.save();
res.status(200).json({transaction,product});
    }catch(error){
res.status(400).json({message:error.message});
    }
}


//get transactions
export const getTrans = async(req,res)=>{
    try{
const transactions = await Transaction.find();
res.status(200).json(transactions);
    }catch(error){
res.status(400).json({message:error.message});
    }
}

//get transaction by id
export const getTransById = async(req,res)=>{
    try{
const {id} = req.params;
const transaction = await Transaction.findById(id);
if(!transaction) return res.status(404).json({message:"Provide a valid transaction id"});
res.status(200).json(transaction);
    }catch(error){
res.status(400).json({message:error.message});
    }
}