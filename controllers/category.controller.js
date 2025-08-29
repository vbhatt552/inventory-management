import Category from '../models/category.model.js';


export const createCat = async(req,res)=>{

try{
const {name, description} = req.body;
const category = new Category({name,description});
await category.save();
res.status(201).json(category);
}catch(error){
    res.status(400).json({message:error.message});
}
}


//getting categories

export const getCat = async(req,res)=>{

    try{
        const categories = await Category.find();
        res.json(categories);
    }catch(error){
res.status(500).json({message: error.message});
    }
}

//update category

export const updateCat = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name,description} = req.body;
        const category = await Category.findByIdAndUpdate(id,{name,description},{new:true});
        res.json(category);
    }catch(error){
res.status(400).json({message:error.message});
    }
};


//delete category


export const deleteCat = async(req,res)=>{
    try{
        const {id} = req.params;
        await Category.findByIdAndDelete(id);
        res.json({ message: 'Category deleted successfully' });
    }catch(error){
        res.status(400).json({message:error.message});
    }
};