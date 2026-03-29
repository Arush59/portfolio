const mongoose = require('mongoose');

const skillSchema = mongoose.Schema(
    {
        category: {
            type: String,
            required: [true, 'Please add a category'],
        },
        items: {
            type: [String],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Skill', skillSchema);
