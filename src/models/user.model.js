const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        // maxlength: 50,
        unique: true
    },
    orders: [{
        type:Schema.Types.ObjectId, ref:'Order'
    }]
})

module.exports = mongoose.model('User', userSchema);