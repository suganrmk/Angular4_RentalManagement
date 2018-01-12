import mongoose from 'mongoose';

// var Schema = mongoose.Schema({
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     fieldname: String,
//     originalname: String,
//     mimetype: String,
//     destination: String,
//     filename: String,
//     path: String,
//     size: Number
// });

var sliderSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    title: String,
    subtitle: String,
    sliderImage: Object
});



// export default mongoose.model('Slider', Schema);
export default mongoose.model('HomeSlider', sliderSchema)