import mongoose from 'mongoose';
import HomeSlider from './slider.server.model';
import users from './users.server.model'
var Schema = mongoose.Schema;

var productSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    ProductType: String,
    RoomType: String,
    Accommodates: String,
    City: Object,
    Rooms: {
        Bedrooms: String,
        Beds: String,
        Bathrooms: String
    },
    Listing: {
        ProductType: String,
        RoomType: String,
        Accommodates: String,
    },
    Description: {
        Title: String,
        Summary: String
    },
    Location: {
        Country: String,
        Street1: String,
        Street2: String,
        City: String,
        State: String,
        Zipcode: String
    },
    Amenities: {
        Common: Array,
        Additional: Array
    },
    Photos: Array,
    Pricing: {
        Baseprice: String,
        Longtermprice: {
            Weekly: String,
            Montly: String
        }
    },
    UnavailabeDates: Array,
    status: String,
    slider: { type: Schema.Types.ObjectId, ref: 'HomeSlider' },
    host: { type: Schema.Types.ObjectId, ref: 'users' },

});

export default mongoose.model('Products', productSchema);