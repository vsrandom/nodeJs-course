const express  = require('express')
const path = require('path')
const adminData = require('./admin')
const router = express.Router();

const productController = require('../controllers/products')

// get / post do exact matching !
router.get("/", productController.getProducts)

module.exports = router;