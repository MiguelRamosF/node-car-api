const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create brands Schema & model
const BrandsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
        //unique: true
    }
});

const Brands = mongoose.model('brands', BrandsSchema);

module.exports = Brands;