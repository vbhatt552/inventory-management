import Supplier from "../models/supplier.model.js";

//Create supplier

export const createSup = async(req,res)=>{
    try{
    const {name,mobile,email} = req.body;
    const supplier = new Supplier({name,mobile,email});
    await supplier.save();
    res.status(201).json(supplier);
    }catch(error){  
     res.status(400).json({message:error.message}) ;
    }
}

//get suppliers

export const getSup = async(req,res)=>{
    try{
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

//get supplier by id

export const getSupById = async(req,res)=>{
    try{
        const {id} = req.params;
        const supplier = await Supplier.findById(id);
        res.status(200).json(supplier);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

//delete supplier

export const deleteSup = async(req,res)=>{
    try{
        const {id} = req.params;
        await Supplier.findByIdAndDelete(id);
        res.status(200).json({message:"Deleted Successfully"});
    }catch(error){
        res.status(400).json({message:error.message});
    }
};