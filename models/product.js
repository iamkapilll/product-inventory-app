//product.js
const mongoose = require('mongoose');


//schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy','meat']
    }

});

//this is model is used to create a new product in the database
const Product = mongoose.model('Product', productSchema);

module.exports = Product; // to use this model in other files



