const path = require('path')
const fs = require('fs')

const p = path.join(__dirname,'..','data','products.json')

const getProductsFromFile = (cb)=>{
    fs.readFile(p,(err, fileContent)=>{
        if(!err) cb(JSON.parse(fileContent));
        else cb([])
    })
}


module.exports  = class Product{
    constructor(req){
        this.title = req.body.title;
    }

    save(){
        getProductsFromFile((products)=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log("SAVE",err);
            })
        })
    }

    static fetchAll(cb){
        getProductsFromFile(cb)
    }
}