const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Required Field"],
        minlength: [5, "Must be at least 5 characters long."]
    },
    price: {
        type: Number,
        required: [true, "Required Field"],
        minlength: [.01, "Price must be at least $0.01."]
    },
    description: {
        type: String,
        required: [true, "Required Field"],
        minlength: [5, "Must be at least 5 characters long."]
    },
}, {timestamps:true})

const Product = new mongoose.model("Template", ProductSchema);

module.exports = Product;