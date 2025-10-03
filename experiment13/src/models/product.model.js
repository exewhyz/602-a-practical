import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 1
    },
    color: {
        type: String,
        required: true
    }
}, { timestamps: true });

const product = mongoose.model("Product", productSchema);

export default product;