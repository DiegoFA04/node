const mongoose = require('mongoose');

const TracksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    album: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        validate: {
            validator: (req) => {
                return true;
            },
            message: 'ERROR_URL',
        },
    },
    artist: {
        name: {
            type: String,
            required: true,
        },
        nickname: {
            type: String,
            required: true,
        },
        nationality: {
            type: String,
            required: true,
        },
    },
    duration: {
        start: {
            type: Number,
            required: true,
        },
        end: {
            type: Number,
            required: true,
        },
    },
    mediaId: {
        type: mongoose.Types.ObjectId,
    }
},
    {
        timestamps: true,
        versionKey: false,
    });

module.exports = mongoose.model('tracks', TracksSchema);