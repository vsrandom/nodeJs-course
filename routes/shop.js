const express  = require('express')
const path = require('path')
const adminData = require('./admin')
const router = express.Router();

// get / post do exact matching !
router.get("/",(req,res,next)=>{
    // console.log(adminData.products)    
    // res.sendFile(path.join(__dirname,'..','views','shop.html'))
    res.render('shop',{pageTitle : 'SHOP',
    prods : adminData.products,
    path : '/',
    hasProducts : adminData.products.length > 0,
    activeShop : true,
    productCSS : true})
})

module.exports = router;