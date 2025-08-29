import Product from "../models/product.model.js";

//create a product 
export const createProd = async(req,res)=>{
    try{
        const {name,sku,price,stock,categoryId,supplierId} = req.body;
        const newProd = new Product({
            name,
            sku,
            price,
            stock,
            categoryId,
            supplierId
        });
        await newProd.save();
        res.status(201).json(newProd);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

//get products 

export const getProd = async(req,res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}


//update products

export const updateProd = async(req,res)=>{
     try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



//get a product by id

export const getProdById = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

//delete a product

export const deleteProd = async(req,res)=>{
    try{
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).json({message:"succesfully deleted"});
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
