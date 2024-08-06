const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    /* date: {
        type: Date,
        default: Date.now,
    }, */
    role: {
        type: ['user', 'admin'],
        default: 'user',
    },
},
    {
        timestamps: true,
        versionKey: false,
    });

module.exports = mongoose.model('users', UserSchema);