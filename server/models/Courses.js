const mongoose = require('mongoose'); // Fix the require statement

const courseSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Duration: {
        type: Number,
        required: true
    },
    Category: { // Correct spelling to 'Category'
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: false
    }
});

const Courses = mongoose.model('Courses', courseSchema);

module.exports = Courses;
