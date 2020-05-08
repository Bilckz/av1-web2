const mongoose = require('../../database');

const SalePriceSchema = new mongoose.Schema({

    percentage: {
        type: Number,
        required: true,
    },
})

const SalePrice = mongoose.model('SalePrice', SalePriceSchema);

module.exports = SalePrice;