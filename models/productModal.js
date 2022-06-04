const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    },
    quantity: {
        type:Number,
        require:true
    },
    price: {
        type:String,
        require:true
    },
    _createdBy: {
        type:String,
        require:true
    }
})
const productData = mongoose.model('product',productSchema);
module.exports = productData;