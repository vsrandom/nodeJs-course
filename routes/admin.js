const express = require('express')

const router = express.Router()

router.get("/add-product",(req,res,next)=>{
    console.log("second middle ware")
    res.send("<form action = '/admin/product' method = 'POST'><input type = 'text' name = 'message' /><input type = 'submit' value = 'add'></form>")
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

module.exports = router