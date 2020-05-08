const express = require('express');
const Product = require('../models/product');
const SalePrice = require('../models/salePrice');

const router = express.Router();

router.get('/product', async (req,res) =>{
    try{
        const product = await Product.find();
        return res.send({ product })
    
    } catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Error loading products'});
    }
})

router.put('/salePrice/:salePriceId', async(req,res) =>{
    
    const { percentage } = req.body;
    
    try{
        const salePrice = await SalePrice.findByIdAndUpdate(req.params.salePriceId, {
            percentage
        });
        return res.send({ salePrice })
    
    } catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Error update percentage'});
    }
})

router.get('/saleprice', async (req,res) =>{
    try{
        const salePrice = await SalePrice.find();
        return res.send({ salePrice })
    
    } catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Error loading sale price'});
    }
})

module.exports = app => app.use('', router)

