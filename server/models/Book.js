const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false,
        min: 0,
        max: 5
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Collection'
    }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = {
    Book
};