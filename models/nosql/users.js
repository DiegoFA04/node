const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

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

UserSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('users', UserSchema);