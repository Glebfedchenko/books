const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CollectionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
});

const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = {
    Collection
}
