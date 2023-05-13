const router = require('express').Router();
const productController = require('../controller/productController');

//New product
router.post('/newproduct', productController.createProduct);

//Update product
router.put('/:id', productController.updateProduct);

//Get product
router.get('/:id', productController.getProduct);

//Get all product
router.get('/', productController.getAllProduct);

module.exports = router;