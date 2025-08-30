import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
    },
    type:{
        type: String,
        enum: ['IN','OUT'],
        required: true
    },
    quantity:{
        type:Number,
        min:0,
        required:true
    }
})

const Transaction = mongoose.model('Transaction',transactionSchema);
export default Transaction;