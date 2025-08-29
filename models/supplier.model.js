import mongoose from "mongoose";

 const supplierSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    mobile:{
        type:String,
        required: true,
        minlength:10,
        maxlength:10
    },
    email:{
         type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    }
 },{
    timestamps:true
 })

 const Supplier = mongoose.model('Supplier',supplierSchema);
 export default Supplier;