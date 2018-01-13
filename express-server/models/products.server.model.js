import mongoose from 'mongoose';

var Schema = mongoose.Schema({
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
    status: String
});

export default mongoose.model('Products', Schema);