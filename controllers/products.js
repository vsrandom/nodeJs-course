const Product = require('../models/product')

module.exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    res.render('add-product',{pageTitle : 'Add-Products',
    path : '/admin/add-product',
    formsCSS : true,
    productCSS : true,
    activeAddProduct : true})
}

module.exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req)
    product.save();
    res.redirect('/');
}

module.exports.getProducts = (req,res,next)=>{
    const products = Product.fetchAll((products)=>{
        res.render('shop',{pageTitle : 'SHOP',
        prods : products,
        path : '/',
        hasProducts : products.length > 0,
        activeShop : true,
        productCSS : true})
    });
}