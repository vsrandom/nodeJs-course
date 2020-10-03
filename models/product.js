const products = []

module.exports  = class Product{
    constructor(req){
        this.title = req.body.title;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}