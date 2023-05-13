const Product = require('../modal/Product');
const { tryCatch } = require('../utils/tryCatch');
const ExpressError = require('../utils/ExpressError');
const { productSchema } = require('../schema');

//CREATE PRODUCT
module.exports.createProduct = tryCatch(
    async (req, res) => {
        const { error } = productSchema.validate(req.body);
        if (error) {
            throw new ExpressError("Details not entered correctly", 400);
        }
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }
)

//UPDATE PRODUCT
module.exports.updateProduct = tryCatch(async (req, res, next) => {
    //find and update
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true })
    res.status(200).json(updatedProduct);
})

//GET PRODUCT
module.exports.getProduct = tryCatch(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        throw new ExpressError("Couldn't find Product", 404);
    }
    res.status(200).json(product);
})

//GET ALL PRODUCTS
module.exports.getAllProduct = tryCatch(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
})