const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    description: {
        type: String,
        maxLength: 60,
        require: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);