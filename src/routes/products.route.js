const express = require('express');
const router = express.Router();
const product = require('../controllers/products.controller');

//route qui nécessite une authorisation pour les users de type admin (dans le cas où on ferait un back office)
router.post('/products' ,product.create); 
// Sans authorisation:
router.get('/products/', product.getProducts);
router.get('/products/:id', product.getProduct);


module.exports = router;