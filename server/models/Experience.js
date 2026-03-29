const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema(
    {
        role: {
            type: String,
            required: [true, 'Please add a role'],
        },
        company: {
            type: String,
            required: [true, 'Please add a company'],
        },
        duration: {
            type: String,
            required: [true, 'Please add a duration'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Experience', experienceSchema);
