const mongoose = require('../../database');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;