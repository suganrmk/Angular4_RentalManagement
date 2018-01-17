import mongoose from 'mongoose';

var userSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    cart: Array,
    token: String
});

export default mongoose.model('users', userSchema)