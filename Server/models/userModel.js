const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        tyep: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        tyep: String,
        required: true,
    },
    identificationType: {
        type: String,
        required: true,
    },
    identificationNumber: {
        type: String,
        required: true,
    },
    address: {
        tyep: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("users", userSchema);
