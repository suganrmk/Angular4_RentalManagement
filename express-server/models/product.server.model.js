import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    productName: String,
    productDesc: String,
    productPrice: String,
    productAvail: Boolean
});

export default mongoose.model('Product', Schema);