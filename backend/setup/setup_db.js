const SalePrice = require('../src/app/models/salePrice');
const Product = require('../src/app/models/product');

Product.deleteMany({}, function() {console.log("deleting all products...")});

SalePrice.deleteMany({}, function() {console.log("deleting all sales prices...")});

SalePrice.create({ "percentage": 0 });

Product.create(
    { 
    "name": "Mouse hp 200",
    "price": 40 
    },
    {
    "name": "Smart TV LG 32",
    "price": 450.0
    },
    {
    "name": "Notebook LG 3322",
    "price": 1900    
    }
);
