import mongoose from "mongoose";

const prodSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
     
    sku:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    price:{
        type: Number,
        required: true,
        min: 0,
    },
    stock:{
        type: Number,
        required: true,
        default:0,
        min: 0,
    },

    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
    },
     supplierId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Supplier',
    }

},{
    timestamps: true
});


const Product = mongoose.model('Product',prodSchema);
export default Product;